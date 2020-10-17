<template>
  <div class="row">
    <div class="col-md-8">
      <edit-profile-form :model="model">
      </edit-profile-form>
    </div>
    <div class="col-md-4">
      <user-card :user="user"></user-card>
    </div>
  </div>
</template>
<script>
  import EditProfileForm from './Profile/EditProfileForm';
  import UserCard from './Profile/UserCard'
  export default {
    components: {
      EditProfileForm,
      UserCard
    },
    data() {
      return {
        model: {
          company: 'Creative Code Inc.',
          email: 'haicnt.iuh@email.com',
          username: 'thanhhai01',
          firstName: 'Cao Ngọc Thanh',
          lastName: 'Hải',
          address: '12 Nguyễn Văn Bảo',
          city: 'IVC',
          country: 'HCM',
          about: 'Đang học tập và làm việc tại HCM city'
        },
        user: {
          fullName: 'Haicnt',
          title: 'Student',
          description: `Đang làm đồ án`,
        }
      }
    }
  }
</script>
<style>
</style>
