import { SERVER_NODE } from '../axios/configAPI';
import Helper from '../helpers/helpers';
class ServiceConverter{
    convertServices = (services) => {
        var ret = [];
        services.forEach((item) => {
            const methods = Object.keys(item.config);
            const result = methods.map((method) => {
    
                return {
                    key: item.endpoint + method,
                    Endpoint: item.endpoint,
                    Method: method,
                    Redirect_Method: item.config[`${method}`].method,
                    URL: item.config[`${method}`].url,
                    config: item.config[`${method}`],
                    origin: item
                }
            })
            ret.push(...result);
        })
        return ret
    }
    ConvertObjectToArray = (object) => {
        const keys = Object.keys(object || {});
        const values = Object.values(object || {});
        return keys.map((key, index) => {
            return {
                key: key,
                value: values[index]
            }
        })
    }
    ConvertWithoutOrigin = (object) => {
        const config = object.origin.config[`${object.Method}`];
        return {
            key: object.origin.Id || 0,
            endpoint: object.Endpoint,
            method: object.Method,
            id: object.origin.Id || 0,
            method_direct: object.Redirect_Method,
            url: object.URL,
            body: config.body,
            header: config.header,
            params: config.params,
            typebody:config.typebody,
            auth: this.DecodeAuthorization(config.Authorization)
        }
        
    }
    EncodeAuthorization = (object) => {
        if (object.type === 'Bear') {
            return `Bear ${object.token}`
        }
        if (object.type === 'Basic') {
            const stringBtoa = `${object.username || ''}:${object.password || ''}`
            return `Basic ${window.btoa(stringBtoa)}`
        } else {
            return null || {}
        }
    }
    DecodeAuthorization = (string) => {
        if (typeof string === 'string') {
            const auth = string.split(" ");
            console.log('decode', auth);
            if(auth[0] === 'Bear'){
                return {
                    type:auth[0], 
                    token:auth[1]
                };
            }else{
                const atob = window.atob(auth[1]).split(":");
                return {
                    type:auth[0], 
                    username: atob[0],
                    password:  atob[1]
                };
            }
        }else{
            return {}
        }
    }
    convertCountAllData = (object)=>{
        return {
            attack:Helper.addFieldColorRandom(object.attack?object.attack.count:[]),
            os:Helper.addFieldColorRandom(object.os?object.os.count:[]),
            warnning:Helper.CountPercent(object.warnning?object.warnning.count:[],false),
            violate:object.violate?object.violate.count:[],
            vulnerability: Helper.addFieldColorRandom(Helper.CountPercent(object.vulnerability?object.vulnerability.count:[],false)),
        }
    }
    convertCountData = (data)=>{
        return data.map((item,index) =>{
            return {
            key:index,
            image:  SERVER_NODE+'/static'+(item.image || '/news/nature2.jpg'),
            title: item.key,
            task: Helper.numFormatter(item.value)+'',
            des: item.unit
            }
        })
    }
    convertFeaturedNews=(featured)=>{
        return featured.map((item,index) =>{
            return {
            key:index,
            image:  (item.image || '/news/nature2.jpg'),
            title: item.title,
            link:item.link,
            author:item.author,
            des: item['content:encoded'].__cdata,
            time:item.pubDate
            }
        })
    }
    convertConfigFile=(config)=>{
        return config
    }
    convertUsers=(users)=>{
        const _users = users.map(item => {
            return {
                ...item,
                hidePass:'*********'
            }
        })
        return _users;
    }
}
export default new ServiceConverter();
