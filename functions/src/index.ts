import { onCall, CallableRequest } from 'firebase-functions/v2/https'
import { initializeApp, auth } from 'firebase-admin'

initializeApp()

interface AddAdminData {
    email: string
}

interface CustomUserClaims {
    admin: boolean
}

export const addadmin = onCall(async ( { data: { email } }: CallableRequest<AddAdminData>): Promise<{ message: string }> => {
    try {
       const user = await auth().getUserByEmail(email)

       try {
           await auth().setCustomUserClaims(user.uid, {
               admin: true
           } as CustomUserClaims)
           console.log(`Admin claim set successfully for user with email: ${email}}`)
       } catch (err) {
           console.error(`Failed to set admin claim for user with email: ${email}`, err)
           return { message: 'Failed to set admin claim' }
       }

    } catch (err) {
        console.error(`Failed to get user with email: ${email}`, err)
        return { message: `Failed to get user with email: ${email}` }
    }

    return { message: 'Success!' }
})
