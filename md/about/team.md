---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/5669657?s=96&v=4',
    name: 'Tom Sapletta',
    title: 'Creator',
    links: [
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/tom-sapletta-com' }
    ]
  },
 {
    avatar: 'https://logo.dialogware.com/dialogware-logo-pivot.png',
    name: 'Join us!',
    title: 'Software Developer',
    links: [
       { icon: 'linkedin', link: 'https://www.linkedin.com/in/tom-sapletta-com' }
    ]
  }
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Our Team
    </template>
    <template #lead>
      The development of DIALOGWARE is guided by an international
      team, some of whom have chosen to be featured below.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>
