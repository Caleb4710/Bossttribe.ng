useEffect(() => {
  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    console.log("USER:", user) // ADD THIS LINE
    if (!user) {
      router.push('/')
    }
  }
  checkUser()
}, [router])
