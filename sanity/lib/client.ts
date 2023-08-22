import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'
import { SanityClient } from 'sanity'

export const client :SanityClient= createClient({
  apiVersion:'2021-10-21',
  dataset:"production",
  projectId:"9n8g1zd6",
  useCdn:false,
})
