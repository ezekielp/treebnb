# == Schema Information
#
# Table name: treehouses
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  description :string           not null
#  owner_id    :integer          not null
#  address     :string           not null
#  lat         :float            not null
#  lng         :float            not null
#  price       :float            not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class TreehouseTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
