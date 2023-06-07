import { goto } from '$app/navigation'

// Database
const fetchDataTable = async (table: string, supabase: any) => {
	const { data, error } = await supabase.from(table).select('*')
	if (error) {
		throw new Error(error.message)
	}
	return data
}

const insertData = async (table: string, data: any, supabase: any) => {
	const { error } = await supabase.from(table).insert(data)
	if (error) {
		throw new Error(error.message)
	}
	return true
}

// AUTH
const logoutHandler = async (supabase: any) => {
	const { error } = await supabase.auth.signOut()
	if (error) {
		throw new Error(error.message)
	}

	goto('/')
}

export { fetchDataTable, insertData, logoutHandler }
