import axios from 'axios';
const config = useRuntimeConfig()

export default defineEventHandler(async (event) => {
    console.log(config.token)

    const { data } = await axios({
        method: 'get',
        url: `https://api.github.com/users/ThomyLorenzatti/repos`,
        headers: {
            Authorization: `Bearer ${config.token}`,
            "Content-Type": "application/json",
            'Accept-Encoding': 'identity',
        },
    })
    console.log("data1", data)
    return (data);
  })
  