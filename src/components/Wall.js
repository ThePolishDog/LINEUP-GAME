import { MeshBasicMaterial, BoxGeometry, Mesh, DoubleSide, TextureLoader } from 'three';


export default class Wall {
    constructor(which) {
        this.material = []
        this.material.push(new MeshBasicMaterial({ side: DoubleSide, map: new TextureLoader().load('/src/components/assets/walls.png') }));
        this.material.push(new MeshBasicMaterial({ side: DoubleSide, map: new TextureLoader().load('/src/components/assets/walls.png') }));
        this.material.push(new MeshBasicMaterial({ side: DoubleSide, map: new TextureLoader().load('/src/components/assets/walls.png') }));
        this.material.push(new MeshBasicMaterial({ side: DoubleSide, map: new TextureLoader().load('/src/components/assets/walls.png') }));
        this.material.push(new MeshBasicMaterial({ side: DoubleSide, map: new TextureLoader().load('/src/components/assets/walls.png') }));
        this.material.push(new MeshBasicMaterial({ side: DoubleSide, map: new TextureLoader().load('/src/components/assets/walls.png') }));
        if (which == "pt") {
            this.geometry = new BoxGeometry(1000, 502, 3);
            this.wall = new Mesh(this.geometry, this.material);
        } else if (which == "bb") {
            this.geometry = new BoxGeometry(3, 502, 1000);
            this.wall = new Mesh(this.geometry, this.material)
        } else if (which == "dl") {
            this.geometry = new BoxGeometry(1000, 3, 1000);
            this.wall = new Mesh(this.geometry, this.material);
        }
        return this.wall
    }
}