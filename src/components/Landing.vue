<template>
    <div>
        <div class="row" style="justify-content: center;">
            <div
                v-if="tab === 0"
                class="col-12 col-sm-12 col-md-12 col-lg-12 header mt-5 mb-5">
                <p class="header-title font-effect-decaying">Zombie Prevention Lab</p>
            </div>

            <div v-if="tab === 0" class="col-11 col-sm-11 col-md-8 col-lg-6">
                <b-button class="m-1" v-scroll-to="'#uppdrag'">Skippa backstory</b-button>
                <b-button class="m-1" @click="displayHighscore">Topplista</b-button>
                <b-button class="m-1" href="/markers">Markörer</b-button>
                
                <b-jumbotron class="m-4">
                                                                <h5>Get your version here:</h5>
                                                                <div>
                                                                    <a
                                                                        v-if="android"
                                                                        href="https://play.google.com/store/apps/details?id=se.isakpersson.zombiear&fbclid=IwAR3cpQ8U3E-VZVRgmwR106UB2COeRK2cToiAcIL_mTJbdepGnkJf7a58Pp0">
                                                                        <img class="download" src="/static/images/playstore.svg"></a>
                                                                        <a
                                                                            v-if="!android"
                                                                            href="https://itunes.apple.com/gb/app/zombie-lab-ar-experience/id1439362837?mt=8&ign-mpt=uo%3D2&fbclid=IwAR0Cy88WE5sHTFvtFjWP75BXGsFfZcTc6Z89xfME1ntFUWBlCaEnOgEb4MA">
                                                                            <img class="download" src="/static/images/app-store.svg"></a>
                                                                        </div>
                                                                    </b-jumbotron>

                <b-card
                    class="envelope m-4"
                    title="Bakgrund"
                    img-src="http://vamers.com/wp-content/uploads/2017/12/Vamers-Gaming-A-New-Walking-Dead-Game-Is-Coming-From-Payday-Developer-Overkill-02.jpg"
                    img-alt="Image"
                    img-top
                    tag="article">
                    Infektionen började i Danmark. De första bilderna som spred sig på nätet blev
                    snabbt avfärdade som fejk. Först några dagar efter att viruset brutit ut så
                    började världen ta hotet allvar. Då var det dock för sent, hela Danmark var
                    smittat och zombies började röra sig över gränserna.
                    <br>
                        <br>
                            Infektionen var snabb och dödlig när den rörde sig genom centrala Europa. Den
                            rörde sig långsammare norrut, men fortfarande snabbt nog att vara en stor fara.
                            Sverige, Norge och Finland är de enda länderna i Europa som fortfarande inte är
                            helt utplånade av viruset. Än.
                        </b-card>

                        <b-card
                            id="uppdrag"
                            class="envelope m-4"
                            title="Uppdrag"
                            img-src="https://i.ytimg.com/vi/MYwo1EwcN1s/maxresdefault.jpg"
                            img-alt="Image"
                            img-top
                            tag="article">
                            Ert uppdrag är att stoppa viruset genom att framkalla ett vaccin. Med hjälp av
                            verktyget och kemikalierna i labbet tillsammans med hemliga ledtrådar lämnade av
                            tidigare forskare.
                            <br>
                                <br>
                                    Roll 1: Ingenjör
                                    <br>
                                        Roll 2: Kemist
                                        <br>
                                            Roll 3: Biolog
                                            <br>
                                                <br>
                                                    Verktyg:
                                                    <br>
                                                    <img style="max-width: 300px; margin: 10px auto; display: block;" src="/static/images/tool.jpg"/>
                                                    <br>
                                                            <br>
                                                                Genom att granska ledtrådarna och kartan så kan ni hitta lösningen till vaccinet
                                                                och rädda de människor som finns kvar. Hinner ni inte i tid så är hoppet ute..
                                                            </b-card>

                                                        
                                                                </div>

                                                                <div
                                                                    v-if="tab === 1"
                                                                    class="col-12 col-sm-12 col-md-12 col-lg-12 header mt-5 mb-5">
                                                                    <p class="header-title font-effect-decaying">Topplista</p>
                                                                </div>

                                                                <div v-if="tab === 1" class="col-11 col-sm-11 col-md-8 col-lg-6">
                                                                    <b-button class="m-4" v-on:click="tab = 0">Tillbaka</b-button>
                                                                    <div class="table-container">
                                                                        <table class="table table-dark">
                                                                            <thead>
                                                                                <tr>
                                                                                    <th scope="col">Plats</th>
                                                                                    <th scope="col">Namn</th>
                                                                                    <th scope="col">Tid</th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                <tr v-for="(group, index) in highscoreList">
                                                                                    <th scope="row">
                                                                                        {{index + 1}}</th>
                                                                                    <td>{{ group.name }}</td>
                                                                                    <td>{{ group.score + 's' }}</td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </template>

                                                    <script>
                                                        import Firebase from 'firebase/app'
                                                        import 'firebase/firestore'

                                                        var config = {
                                                            apiKey: "AIzaSyDYDte2awTpbCjySft7OXSKE5Su3gUreBs",
                                                            authDomain: "zombiear-e347b.firebaseapp.com",
                                                            databaseURL: "https://zombiear-e347b.firebaseio.com",
                                                            projectId: "zombiear-e347b",
                                                            storageBucket: "zombiear-e347b.appspot.com",
                                                            messagingSenderId: "1055488220086"
                                                        };

                                                        export default {
                                                            components : {},
                                                            data() {
                                                                return {android: true, highscoreList: [], tab: 0}
                                                            },
                                                            created() {
                                                                if (!Firebase.apps.length) {
                                                                    Firebase.initializeApp(config)
                                                                }
                                                                Firebase
                                                                    .firestore()
                                                                    .settings({timestampsInSnapshots: true});

                                                                if (navigator.platform === 'iPhone') {
                                                                    this.android = false
                                                                }
                                                            },
                                                            methods : {
                                                                async displayHighscore() {
                                                                    await this
                                                                        .$binding("highscore", Firebase.firestore().collection("highscore").orderBy('score'))
                                                                        .then((highscore) => {
                                                                            if (highscore.length === 0) {
                                                                                this.errorMessage = 'No highscore..'
                                                                            } else {
                                                                                this.highscoreList = highscore
                                                                                this.tab = 1
                                                                            }
                                                                        })
                                                                }
                                                            }
                                                        }
                                                    </script>

                                                    <style lang="scss"></style>
