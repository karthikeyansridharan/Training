

> routes
    my-account-routes.tsx
        <Route path={/} element={HomePage}>

    - main-route
        <Routes>
            <Route>
            <MyAccountRoutes>
        </Routes>

> pages
    - home-page
        <HomePage>

> layouts
    > AppLayout
    > AuthLayout
    
> features
    > home-page
        > HomePageBanner



> components - Dumb Components
    > Button
    > CarouselCard
    > FormInput
    > 

> config 
    menu.json
    




userName : {
    profile : <Image>,
    accNo : <num>,
    email : <email>,
    cards : [
        {
            cardBrand : <visa>,
            cardNumber : <cardNumber>,
            cardCvv : <cvv>,
            cardValidity : <MM/YY>,
            cardName : <name>,
            preferred : <true>,
        }
    ],
    currMonth : {
        amount : <amount>,
        due : <due>,
        watts : <watt>, 
        saved : <totalSaved>,
        costBreakdown : [
            {
                name : <firePlace>,
                amount : <amt>,
                increase : <false>,
                difference : <percent>,

            },
        ],
    },
    prevMonth : {
        amount : <amt>,
        watts : <watt>
    },
}