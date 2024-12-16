import { createClient } from '@libsql/client';

const connection = createClient({ 
    url: 'libsql://bolillo-golpeabuelas.aws-us-east-1.turso.io',
    authToken: 'eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MzM4MTcyNzIsImlkIjoiMTM4ZWU3NjgtNDg4ZS00OTRlLWFiNmYtMWU5Njg1MjJlNDVjIn0.zYOxEdeX2J1-AnOq6_HwqcN51f9IcpaLj2tz6XXj3oeSqw7tt1ybvhHXING8JQms5iivVgnteQgkDNqDuRM-BQ'
})

export default connection;