import React from 'react'
import {create} from 'zustand';


const useUserStore = create((set)=>({
    userData : {
      name: 'Daniel',
      profile : '/profile-image.jpg',
      accNo : '7263278988',
      email : 'danieldoe1@xyzmail.com',
      address : '6440 San Marcus',
      cards : [
          {
              name : '/visa.png',
              number : '•••• 3924',
              cardCvv : 0,
              cardValidity : '',
              cardName : '',
              preferred : false,
          },
          {
              name : '/visa.png',
              number : '•••• 3924',
              cardCvv : 0,
              cardValidity : '',
              cardName : '',
              preferred : false,
          }
      ],
      currMonth : {
          amount : 123.66,
          due : '11/01/2022',
          watts : 720, 
          saved : 20.04,
          costBreakdown : [
              {
                  usage : 'Fire place',
                  amount : 29.00,
                  increase : false,
                  difference : 20,
                  image : '/cost-breakdown/fire-place.png',

              },
              {
                  usage : 'Water',
                  amount : 29.00,
                  increase : true,
                  difference : 20,
                  image : '/cost-breakdown/water.png',

              },
              {
                  usage : 'Heater',
                  amount : 29.00,
                  increase : false,
                  difference : 20,
                  image : '/cost-breakdown/heater.png',

              },
              {
                  usage : 'Lighting',
                  amount : 29.00,
                  increase : true,
                  difference : 20,
                  image : '/cost-breakdown/lighting.png',

              },
              {
                  usage : 'Cooking',
                  amount : 29.00,
                  increase : false,
                  difference : 20,
                  image : '/cost-breakdown/cooking.png',

              },
              {
                  usage : 'Other energy',
                  amount : 29.00,
                  increase : true,
                  difference : 20,
                  image : '/cost-breakdown/other.png',

              },
          ],
      },
      prevMonth : {
        amount : 100.00,
        watts : 700,
      } 
  },
  setUserData : (data) => set({userData:data}),
   addCard: (newCard) =>
    set((state) => ({
      userData: {
        ...state.userData,
        cards: [...state.userData.cards, newCard],
      },
    })),
}));

export default useUserStore;