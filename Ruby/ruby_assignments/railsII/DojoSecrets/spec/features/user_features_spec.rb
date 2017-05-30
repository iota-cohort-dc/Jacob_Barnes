require 'rails_helper'

feature 'User features ' do
  before do
    # calling factory girl create method
    @user = create(:user)
  end

  feature "user sign-up" do
    before(:each) do
      visit "/users/new"
    end
    scenario 'visits sign-up page' do
      expect(page).to have_field('Name')
      expect(page).to have_field('Email')
      expect(page).to have_field('Password')
      expect(page).to have_field('Password_Confirmation')
    end
    scenario "with improper inputs, redirects back to sign in and shows validations" do
      click_button 'Join'
      expect(current_path).to eq('/users/new')
      expect(page).to have_text("can't be blank")
    end

  end

  feature "user dashboard" do
    before do
      log_in
    end
    scenario "displays user information" do
      expect(page).to have_text("#{@user.name}")
      expect(page).to have_link('Edit Profile')
    end
  end
end
