import type { SupabaseClient } from '@supabase/supabase-js'

export const fetchDocumentsData = async (supabase: SupabaseClient<any, 'public', any>) => {
	const { data, error } = await supabase.from('documents').select('*')
	if (error) return
	return data?.map((doc) => {
		return {
			...doc,
			inserted_at: new Intl.DateTimeFormat('en-US', {
				hour: 'numeric',
				minute: 'numeric',
				year: 'numeric',
				month: 'long',
				day: 'numeric'
			}).format(new Date())
		}
	})
}

export const deleteHandler = async (
	supabase: SupabaseClient<any, 'public', any>,
	items: string[]
) => {
	if (items.length === 0) return
	items.forEach(async (id: string) => {
		const { error } = await supabase.from('documents').delete().eq('id', id)
		if (error) console.log(error)
	})
}
