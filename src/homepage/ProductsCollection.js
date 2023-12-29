import ProductsList from "./Components/ProductsList";

function ProductsCollection() {
    return (
        <div className="pcollection">
            <ProductsList dtarray = {dataArray1}/>
            <ProductsList dtarray = {dataArray2}/>
            <ProductsList dtarray = {dataArray3}/>
            <ProductsList dtarray = {dataArray4}/>
        </div>
    )
}
let dataArray1 = {
    list1: {
        name: ['Cushion cover, bedsheets & more', 'Home decoration', 'Home Storage', 'Lighting Solutions'],
        images: ['https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2023/BAU2023/BTFGW/HF_-_PCQC_-_Resized._SY232_CB595940621_.jpg', 'https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2023/BAU2023/BTFGW/Home_Decor_-_PCQC_-_Resized._SY232_CB595940621_.jpg', 'https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2023/BAU2023/BTFGW/HS_-_PCQC_-_Resized._SY232_CB595940621_.jpg', 'https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2023/BAU2023/BTFGW/IL_-_PCQC_-_Resized._SY232_CB595940621_.jpg'],
        link: 'Explore all',
        linkurl: 'https://www.amazon.in/b/?_encoding=UTF8&node=12414705031&pd_rd_w=kospA&content-id=amzn1.sym.832db9b7-f314-4f76-9d63-670fea8d9ec7&pf_rd_p=832db9b7-f314-4f76-9d63-670fea8d9ec7&pf_rd_r=ZK3C4GA1HD46A6QNGXA5&pd_rd_wg=yLMI9&pd_rd_r=19b080a7-e30b-41e1-b98b-610853a11860&ref_=pd_gw_unk',
        heading: 'Revamp your home in style',
    },
    list2: {
        name: ['Clothing', 'Footwear', 'watches', 'Bags & Wallets'],
        images: ['https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-1-372-232._SY232_CB636110853_.jpg', 'https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-2-372-232._SY232_CB636110853_.jpg', 'https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-3-372-232._SY232_CB636110853_.jpg', 'https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF_4-372-232._SY232_CB636110853_.jpg'],
        link: 'End of season sale',
        linkurl: 'https://www.amazon.in/b?node=1968024031',
        heading: 'Up to 60% off | Styles for men',
    },
    list3: {
        name: ['Pregnancy Supplements', 'Maternity Sleep & Loungewear', 'Maternity Pillows', 'Maternity Skin Care'],
        images: ['https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Schoolfromhome/PCQC/2X/Pregnancy_Supplements._SY232_CB667651363_.jpg', 'https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Schoolfromhome/PCQC/2X/Maternity_Sleep__Loungewear._SY232_CB667651363_.jpg', 'https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Schoolfromhome/PCQC/2X/Maternity_pillows._SY232_CB667651363_.jpg', 'https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Schoolfromhome/PCQC/2X/Maternity_Skin_care._SY232_CB667651363_.jpg'],
        link: 'See More',
        linkurl: 'https://www.amazon.in/l/25981077031/?_encoding=UTF8&pd_rd_w=tcgIF&content-id=amzn1.sym.c4e6abc4-6a33-472a-ba5a-c679167cd85f&pf_rd_p=c4e6abc4-6a33-472a-ba5a-c679167cd85f&pf_rd_r=8KHD8SB8G2TM4XYA38ZG&pd_rd_wg=nYevu&pd_rd_r=4b1031ba-d344-47bd-a7fd-fd318f5722ef&ref_=pd_gw_unk',
        heading: 'Essentials for Expecting Mothers',
    }
};
let dataArray2 = {
    list1: {
        name: ['name17', 'name18', 'name19', 'name20'],
        images: ['img17', 'img18', 'img19', 'img20'],
        link: 'New Link Text 1',
        linkurl: 'https://example5.com',
        heading: 'Heading 5',
    },
    list2: {
        name: ['name21', 'name22', 'name23', 'name24'],
        images: ['img21', 'img22', 'img23', 'img24'],
        link: 'New Link Text 2',
        linkurl: 'https://example6.com',
        heading: 'Heading 6',
    },
    list3: {
        name: ['name25', 'name26', 'name27', 'name28'],
        images: ['img25', 'img26', 'img27', 'img28'],
        link: 'New Link Text 3',
        linkurl: 'https://example7.com',
        heading: 'Heading 7',
    }
};

let dataArray3 = {
    list1: {
        name: ['name33', 'name34', 'name35', 'name36'],
        images: ['img33', 'img34', 'img35', 'img36'],
        link: 'Another New Link Text 1',
        linkurl: 'https://example9.com',
        heading: 'Heading 9',
    },
    list2: {
        name: ['name37', 'name38', 'name39', 'name40'],
        images: ['img37', 'img38', 'img39', 'img40'],
        link: 'Another New Link Text 2',
        linkurl: 'https://example10.com',
        heading: 'Heading 10',
    },
    list3: {
        name: ['name41', 'name42', 'name43', 'name44'],
        images: ['img41', 'img42', 'img43', 'img44'],
        link: 'Another New Link Text 3',
        linkurl: 'https://example11.com',
        heading: 'Heading 11',
    }
};

let dataArray4 = {
    list1: {
        name: ['name49', 'name50', 'name51', 'name52'],
        images: ['img49', 'img50', 'img51', 'img52'],
        link: 'Yet Another New Link Text 1',
        linkurl: 'https://example13.com',
        heading: 'Heading 13',
    },
    list2: {
        name: ['name53', 'name54', 'name55', 'name56'],
        images: ['img53', 'img54', 'img55', 'img56'],
        link: 'Yet Another New Link Text 2',
        linkurl: 'https://example14.com',
        heading: 'Heading 14',
    },
    list3: {
        name: ['name57', 'name58', 'name59', 'name60'],
        images: ['img57', 'img58', 'img59', 'img60'],
        link: 'Yet Another New Link Text 3',
        linkurl: 'https://example15.com',
        heading: 'Heading 15',
    }
};
export default ProductsCollection;
