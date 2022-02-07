
import React, { Component } from 'react';
import { Image, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { firstPageStyles } from './components/assets/styles/Styles';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
class App extends Component {
  render() {
    return (
      <View style={firstPageStyles.pageView}>
        <TouchableOpacity>
          <View style={firstPageStyles.itemView}>
            <Image source={require('./components/assets/images/iconTwo.png')} />
            <Text style={firstPageStyles.seventhText}>الطلبات </Text>
          </View>
        </TouchableOpacity>

        <View style={firstPageStyles.personView}>
          <View style={firstPageStyles.personContainer}>
            <Image
              style={firstPageStyles.firstImage}
              source={require('./components/assets/images/personThree.png')}
            />
            <View style={firstPageStyles.containerView}>
              <Text style={firstPageStyles.containerViewFirstText}>محمد سليمان</Text>
              <Text style={firstPageStyles.containerViewSecondText}>
                محاسب              </Text>
            </View>
          </View>
          <View style={firstPageStyles.arrowView}>

            <Icon name="arrow-up" color={"white"} size={10} />
          </View>
        </View>

        <View style={firstPageStyles.requestContainerOne}>
          <View style={firstPageStyles.requestContainerOneFirstView}>
            <Text style={firstPageStyles.secondTextInView}>
              عنوان الطلب
            </Text>
            <Text style={firstPageStyles.requestContainerFirstText}>
              25/2/2020            </Text>
          </View>

          <Text style={firstPageStyles.requestContainerSecondText}>
            هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء


            لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص
          </Text>
        </View>



        <View style={firstPageStyles.conditionView}>
          <View style={firstPageStyles.acceptView}>
            <View >
              <Image source={require('./components/assets/images/like.png')} />

            </View>
            <View style={firstPageStyles.acceptViewOne}>
              <Text style={firstPageStyles.acceptTextOne} >قبول</Text>
            </View>

          </View>

          <View style={firstPageStyles.refuseView}>
            <View >
              <Image source={require('./components/assets/images/like.png')} />

            </View>
            <View style={firstPageStyles.acceptViewOne}>
              <Text style={firstPageStyles.acceptTextOne} >رفض</Text>
            </View>

          </View>




        </View>





        <View style={firstPageStyles.personView}>
          <View style={firstPageStyles.personContainer}>
            <Image
              style={firstPageStyles.firstImage}
              source={require('./components/assets/images/personFour.png')}
            />
            <View style={firstPageStyles.containerView}>
              <Text style={firstPageStyles.firstTextInContainerView}> عنوان الطلب</Text>
              <Text style={firstPageStyles.secondTextInContainerView}>
                محمد سليمان            </Text>
            </View>
          </View>
          <View style={firstPageStyles.arrowViewOne}>

            <Icon name="arrow-down" color={"white"} size={10} />
          </View>
        </View>
        <View style={firstPageStyles.personView}>
          <View style={firstPageStyles.personContainer}>
            <Image
              style={firstPageStyles.firstImage}
              source={require('./components/assets/images/person.jpg')}
            />
            <View style={firstPageStyles.containerView}>
              <Text style={firstPageStyles.firstTextInContainerView}> عنوان الطلب</Text>
              <Text style={firstPageStyles.secondTextInContainerView}>
                محمد سليمان            </Text>
            </View>
          </View>
          <View style={firstPageStyles.arrowViewOne}>

            <Icon name="arrow-down" color={"white"} size={10} />
          </View>
        </View>
        <View style={firstPageStyles.personView}>
          <View style={firstPageStyles.personContainer}>
            <Image
              style={firstPageStyles.firstImage}
              source={require('./components/assets/images/personFive.png')}
            />
            <View style={firstPageStyles.containerView}>
              <Text style={firstPageStyles.firstTextInContainerView}> عنوان الطلب</Text>
              <Text style={firstPageStyles.secondTextInContainerView}>
                محمد سليمان            </Text>
            </View>
          </View>
          <View style={firstPageStyles.arrowViewOne}>

            <Icon name="arrow-down" color={"white"} size={10} />
          </View>
        </View>


        <View style={firstPageStyles.bottomView}>
          <View style={firstPageStyles.innerBottomView}>
            <View>
              <Image source={require('./components/assets/images/home.png')} />
              <Text style={firstPageStyles.firstBottomText}>الرئيسية </Text>
            </View>
            <View>
              <Image source={require('./components/assets/images/order.png')} />
              <Text style={firstPageStyles.secondBottomText}>الطلبات </Text>
            </View>
            <View>
              <Image source={require('./components/assets/images/note.png')} />
              <Text style={firstPageStyles.secondBottomText} >الإشعارات </Text>
            </View>
            <View>
              <Image source={require('./components/assets/images/settings.png')} />
              <Text style={firstPageStyles.secondBottomText}>الإعدادات </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
export default App;
