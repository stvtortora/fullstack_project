class Tasker < ApplicationRecord
  validates :name, :location, presence: true

  has_attached_file :image, default_url: "bunny.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  has_many :tasks

  belongs_to :location

  has_many :time_slot_registrations

  has_many :time_slots,
    through: :time_slot_registrations,
    source: :time_slot

  has_many :category_registrations

  has_many :categories,
    through: :category_registrations,
    source: :category

  has_many :size_registrations

  has_many :sizes,
    through: :size_registrations,
    source: :size

  has_many :vehicle_registrations

  has_many :vehicles,
    through: :vehicle_registrations,
    source: :vehicle
end
