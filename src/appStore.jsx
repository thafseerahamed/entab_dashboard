import create from 'zustand'
import { persist } from 'zustand/middleware'

let appStore = (set) => ({
    dOpen: true,
    updateOpen: (dOpen) => set((state) => ({ dOpen: dOpen }))
})

appStore = persist(appStore, { name: "my_app_store" })

export const useAppStore = create(appStore);