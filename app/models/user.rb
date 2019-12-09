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

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        return nil unless user && valid_password?(password)
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
