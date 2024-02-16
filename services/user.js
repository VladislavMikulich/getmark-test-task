export const fetchUserById = async () => {
  const response = await fetch("https://reqres.in/api/users/1")

  if (!response.ok) {
    return "Failed to fetch user"
  }

  const data = await response.json()

  return data.data
}
