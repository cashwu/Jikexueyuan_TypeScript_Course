/**
 * Created by cash on 2015/05/12.
 */

var jkxyModule = function (vip) {
    //聲明私有成員

    var Yvip = document.getElementById(vip);

    YQ = "123456789";

    return {
        //公開的成員
        add: function(t){
            if(t >= 12){
                var Yv = t;
                Yvip.innerHTML = "年費:" + Yv + "--QQ:" + YQ ;
            }else{
                var Mv = t;
                Yvip.innerHTML = "月費:" + Mv;
            }
        }
    }
};

var jm = new jkxyModule("vip");

jm.add(10);
