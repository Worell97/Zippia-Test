import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Menu from '../components/menu';
import api from '../services/api';
import styles from '../styles/Home.module.css';
import { Content, Footer, JobsContainer, JobsList, LeftSide, RightSide, Title } from './styles';
import Card from '../components/card';
import testJobs from '../testData'
import Filters from '../components/filters';




export default function Home() {
  const [jobs, setJobs] = useState([{}]);
  const [filters, setFilters] = useState({ companyName: '', lastSevenDays: false })

  useEffect(() => {
    loadJobs();
  }, [])

  useEffect(() => {
    console.log(filters)
  }, [filters])

  async function loadJobs() {
    let params = {
      "companySkills": true,
      "dismissedListingHashes": [],
      "fetchJobDesc": true,
      "jobTitle": "",
      "locations": [],
      "numJobs": 10,
      "previousListingHashes": []
    }


    try {
      await api.post('jobs', { params: params }).then((res: any) => {
        console.log(!!res.data.jobs);
        if (!!res.data.jobs) {
          setJobs(testJobs);
        } else
          setJobs(res.data.jobs);

      })
    } catch (error: any) {
      if (error?.response?.status != 404) {
        throw error;
      }
    }
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Developer Jobs Near Me</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
      <Content>
        <Title>
          DEVELOPER JOBS NEAR ME
        </Title>
        <JobsContainer>
          <LeftSide>
            <Filters filters={filters} onChange={setFilters} />
          </LeftSide>
          <RightSide>
            <JobsList>
              {jobs.map((job: any) => (
                <Card jobKey={job.jobKey} jobTitle={job.jobTitle} companyName={job.companyName} jobDesc={job.jobDesc} />
              ))}
            </JobsList>
          </RightSide>
        </JobsContainer>
      </Content>

      <Footer>
        <a
          href="https://github.com/Worell97"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Oscar Filho
        </a>
      </Footer>
    </div>
  )
}
