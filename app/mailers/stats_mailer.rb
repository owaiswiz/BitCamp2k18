class StatsMailer < ApplicationMailer
  default from: 'info.bitcamp@csirait.com'

  def teams_registered_today(file_name, teams_count, members_count, teams_registered_today_count)
    @teams_count = teams_count
    @teams_registered_today_count = teams_registered_today_count
    @members_count = members_count
    attachments[file_name] = File.read(file_name)
    mail to: "owaiswiz@gmail.com", subject: 'Todays Stats - BitCamp'
  end
end
