import { Raycaster, Vector2, DirectionalLight, MeshPhongMaterial, Scene, Mesh, GridHelper, PointsMaterial, SphereGeometry, Points, TextureLoader, AdditiveBlending, BufferGeometry, BufferAttribute, BoxGeometry, CircleGeometry, DoubleSide, AmbientLight } from 'three';
import Renderer from './Renderer';
import Camera from './Camera';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import fireTex from "./assets/fire.png"
import Wall from "./Wall";
import Board from './Gameboard';
import Light from './Light';
import Game from './Game';
import io from 'socket.io-client';


export default class Main {
    constructor(container) {



        var mapa = [
            [8, 8, 8, 8, 8, 8, 8, 8, 8],
            [8, 0, 0, 0, 0, 0, 0, 0, 8],
            [8, 0, 0, 0, 0, 0, 0, 0, 8],
            [8, 0, 0, 0, 0, 0, 0, 0, 8],
            [8, 0, 0, 0, 0, 0, 0, 0, 8],
            [8, 0, 0, 0, 0, 0, 0, 0, 8],
            [8, 0, 0, 0, 0, 0, 0, 0, 8],
            [8, 8, 8, 8, 8, 8, 8, 8, 8]
        ]
        var wolne = 42

        var socket = io();

        // socket.on('changeMserver', function (changeMserver) {
        //     mapa = changeMserver;
        //     console.log(changeMserver)
        //     console.log(mapa)
        // })

        this.scene = new Scene();


        this.renderer = new Renderer(container);
        const gridhelper = new GridHelper(1000, 10)
        this.scene.add(gridhelper)
        this.camera1 = new Camera(30, window.innerWidth / 2, window.innerHeight / 2);

        this.camera1.position.set(300, 37.5, 400)
        const controls = new OrbitControls(this.camera1, this.renderer.domElement);

        this.light1 = new Light(1)
        this.scene.add(this.light1)
        this.light2 = new Light(2)
        this.scene.add(this.light2)
        this.Kulka = []



        // MYSZ I KLIK
        // var raycaster = new Raycaster()

        // $(document).click(function(event) {
        //     this.mouseVector = new Vector2()
        //     this.mouseVector.x = (event.clientX / $(window).width()) * 2 - 1;
        //     this.mouseVector.y = -(event.clientY / $(window).height()) * 2 + 1;
        //     raycaster.setFromCamera(this.mouseVector, this.camera1);
        //     this.intersects = raycaster.intersectObjects(this.scene.children);
        //     console.log(this.intersects.length)

        // })

        var camera2 = this.camera1
        var scene2 = this.scene
        var raycaster = new Raycaster();
        var mouseVector = new Vector2();
        var player = 0
        var listakulek = this.Kulka
        $(document).click(function (event) {
            console.log(raycaster)
            mouseVector.x = (event.clientX / $(window).width()) * 2 - 1;
            mouseVector.y = -(event.clientY / $(window).height()) * 2 + 1;
            console.log(mouseVector)
            raycaster.setFromCamera(mouseVector, camera2);
            this.intersects = raycaster.intersectObjects(scene2.children);
            console.log(this.intersects.length)
            if (wolne > 1) {
                if (this.intersects.length > 0) {
                    console.log(this.intersects[0].object);
                    if (this.intersects[0].object) {
                        if (this.intersects[0].object.uuid) {
                            let igrek = (((this.intersects[0].object.position.y) - 10) / 20) + 1
                            let iks = (3 + this.intersects[0].object.position.x / 20) + 1
                            if (mapa[igrek][iks] == 0 && mapa[igrek - 1][iks] != 0) {
                                if (player == 0) {
                                    mapa[igrek][iks] = 1
                                    this.intersects[0].object.material.color = { r: 0.47, g: 0.82, b: 0.56 }
                                    socket.emit('changeC', { changeC: this.intersects[0].object })
                                    socket.emit('changeM', { changeM: mapa })

                                    player = 1
                                    wolne--
                                    console.log(wolne)
                                    this.game = new Game(mapa)
                                } else if (player == 1) {
                                    mapa[igrek][iks] = 2
                                    this.intersects[0].object.material.color = { r: 0.86, g: 0.42, b: 0.47 }
                                    socket.emit('changeC', { changeC: this.intersects[0].object })
                                    socket.emit('changeM', { changeM: mapa })

                                    player = 0
                                    wolne--
                                    console.log(wolne)
                                    this.game = new Game(mapa)
                                }

                            }
                            // for (let g = 1; g <= 43; g++) {
                            //     if (this.intersects[0].object.uuid == listakulek[g].uuid) {
                            //         listakulek[g].material.color.setHex("ffffff")
                            //     }
                            // }
                        }
                    }

                }
            } else {
                setTimeout(function () { alert("Remis"); }, 5);
            }

        })

        // ZMIENIANY ILOŚĆ PARTIKLÓW!!!


        //this.generatelight()
        this.generatewalls()
        this.generateboard()
        this.render()
    }
    generateboard() {
        //Tworzenie planszy do gry
        this.board = new Board("board")
        this.scene.add(this.board)



        for (let i = 1; i <= 7; i++) {
            for (let j = 1; j <= 6; j++) {
                this.materialS = new MeshPhongMaterial({
                    color: "grey",
                    specular: "grey",
                    shininess: 100,
                    side: DoubleSide,
                })
                this.geometryS = new CircleGeometry(7, 100)
                this.Kulka[i * j] = new Mesh(this.geometryS, this.materialS)
                this.Kulka[i * j].position.set(i * 20 - 80, j * 20 - 10, 16)
                console.log("My X position is:" + (3 + parseInt((this.Kulka[i * j].position.x) / 20)) + "   And My Y position is: " + (((this.Kulka[i * j].position.y) - 10) / 20))
                this.scene.add(this.Kulka[i * j])
            }
        }

    }

    generatewalls() {
        // Tworzenie ścian!
        this.wallek5 = new Wall("dl")
        this.wallek1 = new Wall("pt")
        this.wallek0 = new Wall("dl")
        this.wallek3 = new Wall("pt")
        this.wallek2 = new Wall("bb")
        this.wallek4 = new Wall("bb")
        this.wallek1.position.set(0, 251, 500)
        this.wallek0.position.set(0, -1, 0)
        this.wallek5.position.set(0, 501, 0)
        this.scene.add(this.wallek0)
        this.scene.add(this.wallek5)
        this.scene.add(this.wallek1)
        this.wallek3.position.set(0, 251, -500)
        this.scene.add(this.wallek3)
        this.wallek2.position.set(500, 251, 0)
        this.scene.add(this.wallek2)
        this.wallek4.position.set(-500, 251, 0)
        this.scene.add(this.wallek4)
    }

    render() {



        this.renderer.render(this.scene, this.camera1);
        requestAnimationFrame(this.render.bind(this));

    }

}