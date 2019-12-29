# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  first_name      :string           not null
#  last_name       :string           not null
#

class User < ApplicationRecord
    attr_reader :password
    validates :email, :password_digest, :session_token, :first_name, :last_name, presence: true
    validates :email, :session_token, uniqueness: true
    validates :password, allow_nil: true, length: { minimum: 6 }

    after_initialize :ensure_session_token

    has_many :treehouses,
        foreign_key: :owner_id,
        class_name: :Treehouse

    has_many :bookings,
        class_name: :Booking,
        foreign_key: :guest_id

    has_many :reviews,
        class_name: :Review,
        foreign_key: :reviewer_id

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil unless user && user.valid_password?(password)
        user
    end

    def password=(password)
        @password = password;
        self.password_digest = BCrypt::Password.create(password)
    end

    def valid_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = self.generate_session_token
        self.save!
        self.session_token
    end
    
    def ensure_session_token
        self.session_token ||= self.generate_session_token
    end

    def generate_session_token
        SecureRandom.urlsafe_base64(16)
    end

end
