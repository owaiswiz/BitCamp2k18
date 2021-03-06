class StatsMailer < ApplicationMailer
  default from: 'info.bitcamp@csirait.com'

  def teams_registered_today(file_name, teams_count, members_count, teams_registered_today_count)
    @teams_count = teams_count
    @teams_registered_today_count = teams_registered_today_count
    @members_count = members_count
    attachments[file_name] = File.read(file_name)
    mail to: "owaiswiz@gmail.com,neelbhave91@gmail.com,abhishek22.2323@gmail.com,puthranyash1@gmail.com,dev.naik2102@gmail.com,aditisakhare21@gmail.com,Manish.Manish.yadav52@gmail.com,pooja.rai9196@gmail.com", subject: 'Todays Stats - BitCamp'
  end
end
