module ApplicationHelper
  def get_encoded_files(college_id_file,ticket_file)
    new_college_id_file = nil
    new_ticket_file = nil
    if college_id_file.instance_of? ActionDispatch::Http::UploadedFile
      encoded_college_id_file = Base64.strict_encode64 college_id_file.read
      new_college_id_file = 'data:' + college_id_file.content_type + ';base64,' + encoded_college_id_file
    end
    if ticket_file.instance_of? ActionDispatch::Http::UploadedFile
      encoded_ticket_file = Base64.strict_encode64 ticket_file.read
      new_ticket_file = 'data:' + ticket_file.content_type + ';base64,' + encoded_ticket_file
    end
    return [new_college_id_file,new_ticket_file]
  end

  def registration_closed?
    Time.now > REGISTRATION_DATE_END
  end
end
