class ContactMailer < ApplicationMailer
	default from: "default@gmail.com"
	def send_mail(user)
		 @user ={}
		 @user["email"]= user["email"]
		 @user["name"] = user["name"]
		 @user["address"] =user["address"]
		 @user["mobileNumber"] =user["mobileNumber"]
		 @user["message"] =user["message"]
		mail(to:@user["email"],subject: 'Thank you. we will contact u soon')
	end
end
