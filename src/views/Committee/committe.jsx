import React from 'react'
import { Typography } from '@mui/material'
import './committee.css'
import Chair from './chair'
import { HonoraryChair, GeneralChair, GeneralCoChair, PCChair, PCCoChair, SpecialSessionChair, PublicityAndIndustryAllianceChair, PublicationChair, PublicationCoChair, LocalOrganizingFinanceChair, NationalAdvisoryCommittee,InternationalAdvisoryCommittee, RegistrationChair, SteeringCommitteeMembers  } from './members'


export default function Committe() {
  return (
    <div className='committee' >
      <Chair
        label='Honorary Chair'
        defaultExpanded={false}
        list={HonoraryChair}
      />
      <Chair
        label='General Chair'
        defaultExpanded={false}
        list={GeneralChair}
      />
      <Chair
        label='General Co-Chair'
        defaultExpanded={false}
        list={GeneralCoChair}
      />
      <Chair
        label='PC Chair'
        defaultExpanded={false}
        list={PCChair}
      />
      <Chair
        label='PC Co-Chair'
        defaultExpanded={false}
        list={PCCoChair}
      />
      <Chair
        label='Special Session Chair'
        defaultExpanded={false}
        list={SpecialSessionChair}
      />
      <Chair
        label='Publicity & Industry Alliance Chair'
        defaultExpanded={false}
        list={PublicityAndIndustryAllianceChair}
      />
      <Chair
        label='Publication Chair'
        defaultExpanded={false}
        list={PublicationChair}
      />
      <Chair
        label='Publication Co-Chair'
        defaultExpanded={false}
        list={PublicationCoChair}
      />
      <Chair
        label='Local Organizing & Finance Chair'
        defaultExpanded={false}
        list={LocalOrganizingFinanceChair}
      />
      <Chair
        label='National Advisory Committee'
        defaultExpanded={false}
        list={NationalAdvisoryCommittee}
      />
      <Chair
        label='International Advisory Committee'
        defaultExpanded={false}
        list={InternationalAdvisoryCommittee}
      />
      <Chair
        label='Registration Chair'
        defaultExpanded={false}
        list={RegistrationChair}
      />
      <Chair
        label='Steering Committee Members'
        defaultExpanded={false}
        list={SteeringCommitteeMembers}
      />
    </div>
  )
}

// Goutam Chakraborty
// Iwate Prefectural University, Japan D. Nidhya, MITS, India,  Masafumi MatsuHara, IPU, Japan

// Rung-Ching Chen
// Chaoyang University of Technology, Taiwan
