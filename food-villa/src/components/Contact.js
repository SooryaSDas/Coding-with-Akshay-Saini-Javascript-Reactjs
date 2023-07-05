import React from 'react'

const Contact = () => {
    const cards = [
        {
            card : {
                card : {
                    "title": "Recommended",
                    "itemCards" : [
                        {
                            "card": {
                                "info": {
                                    "id": "85975073",
                                    "name": "Beef kizhi porotta",
                                    "category": "Garam Combos",
                                    "description": "Serves 1 | Parottas soaked with beef curry and wrapped in banana leaf.",
                                },
                                
                            }
                        },
                        {
                            "card": {
                                "info": {
                                    "id": "85975190",
                                    "name": "Ghee rice + beef curry",
                                    "category": "Garam Combos",
                                    "description": "Serves 1 | | Not spicy|",
                                },
                            }
                        },
                    ]
                }
            }
        },
        {
            card : {
                card : {
                    "title": "favourite",
                    "itemCards" : [
                        {
                            "card": {
                                "info": {
                                    "id": "859773",
                                    "name": "Beef demo",
                                    "category": "Garam demo",
                                    "description": "Serves 1 | Parottas leaf.",
                                },
                                
                            }
                        },
                        {
                            "card": {
                                "info": {
                                    "id": "859190",
                                    "name": "Ghee rice + demo",
                                    "category": "Garam demo",
                                    "description": "Serves 1 | | demo|",
                                },
                            }
                        },
                    ]
                }
            }
        }
    ]
    let newdata ;
  return (
    <div>
        {cards.map((item,index)=>(
            <div> 
                <h2>{item.card.card.title}</h2>
        
                {item.card.card.itemCards.map((data,index)=>(
                    <div>
                        <h3>{data?.card?.info?.name}</h3>
                    </div>
                ))}
            </div>
        ))}
    </div>
  )
}

export default Contact