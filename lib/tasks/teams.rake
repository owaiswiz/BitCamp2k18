require 'csv'
namespace :teams do
  desc "Send Email of no of teams registered in the last 24Hrs and some other metrics"
  task total_registered_today: :environment do
    teams_registered_today = Team.where(created_at: 24.hours.ago..Time.now)
    header = ["Team Name", "Team Size", "College Name", "Leader Name", "Leader Phone"]
    file = "todays_stats.csv"

    CSV.open(file, "w") do |csv|
      csv << header
      teams_registered_today.each do |team|
        leader = team.leader
        leader_name, leader_phone = leader ? [leader.name, leader.phone] : ["",""]
        csv << [team.name, team.members.count, team.college_name, leader_name, leader_phone]
      end
    end

    StatsMailer.teams_registered_today(file, Team.count, Member.count, teams_registered_today.count).deliver_now
  end

end
