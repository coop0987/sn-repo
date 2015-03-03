ActiveAdmin.register Subscription do
  permit_params :email

  index do
    selectable_column
    id_column
    column :email
    actions
  end

  filter :email
 

  form do |f|
    f.inputs "Subscription Details" do
      f.input :email
    end
    f.actions
  end

end
