import { off } from "process";

export default{
    name:"products",
    type:"document",
    title:"Products",
    fields:[
        {
          name:"name",
          type:"string",
          title:"Name",
        },
        
            {
                name: "slug",
                title: "Slug",
                type: "slug",
                options: {
                  //Change to schema title to automatically populate
                  source: "name",
                  slugify: (input:any) =>
                    input
                      .toLowerCase()
                      //Remove spaces
                      .replace(/\s+/g, "-")
                      //Remove special characters
                      .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, ""),
                  validation: (Rule:any) => Rule.required(),
                },
              },
        
        {
          name:"description",
          type:"array",
          title:"Description",
          of:[
            {
                type:"block"
            }
          ]
        },
        {
           name:"image",
           type:"array",
           title:"Image",
           of:[
            {
                type:"image",
                fields:[
                    {
                        name:"alt",
                        type:"string",
                        title:"Alt"
                    }
                ]
            }
           ]
        },
        {
            name:"Category",
            type:"reference",
            title:"Category",
            to:[{
                 type:"Category"
            }]
        },
        {
            name:"productType",
            type:"array",
            title:"ProductType",
            of:[
                {
                    type:"string",
                }
            ]
        },
        {
            name:"sizes",
            type:"array",
            title:"Sizes",
            of:[
                {
                    type:"string",
                }
            ]
        },
        {
            name:"price",
            type:"number",
            title:"Price",
        },
        {
            name:"quantity",
            type:"number",
            title:"Qyantity",
        }


    ]
}