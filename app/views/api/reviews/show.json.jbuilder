json.extract! @review, :id, :body, :treehouse_id, :reviewer_id, :updated_at
json.reviewer @review.reviewer.first_name