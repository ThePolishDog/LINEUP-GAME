export default class Game {
    constructor(mapa) {

        this.map = mapa

        for (let i = 1; i <= 6; i++) {
            for (let j = 1; j <= 7; j++) {
                if (this.map[i][j] == 1) {
                    if (this.map[i][j - 1] == 1) {
                        if (this.map[i][j - 2] == 1) {
                            if (this.map[i][j - 3] == 1) {
                                if (this.map[i][j - 4] == 1) {
                                    setTimeout(function () { alert("Wygrał gracz Nr 1"); }, 5);
                                }
                            }
                        }
                    } else if (this.map[i][j + 1] == 1) {
                        if (this.map[i][j + 2] == 1) {
                            if (this.map[i][j + 3] == 1) {
                                if (this.map[i][j + 4] == 1) {
                                    setTimeout(function () { alert("Wygrał gracz Nr 1"); }, 5);
                                }
                            }
                        }
                    } else if (this.map[i - 1][j] == 1) {
                        if (this.map[i - 2][j] == 1) {
                            if (this.map[i - 3][j] == 1) {
                                if (this.map[i - 4][j] == 1) {
                                    setTimeout(function () { alert("Wygrał gracz Nr 1"); }, 5);
                                }
                            }
                        }
                    } else if (this.map[i + 1][j] == 1) {
                        if (this.map[i + 2][j] == 1) {
                            if (this.map[i + 3][j] == 1) {
                                if (this.map[i + 4][j] == 1) {
                                    setTimeout(function () { alert("Wygrał gracz Nr 1"); }, 5);
                                }
                            }
                        }
                    } else if (this.map[i - 1][j - 1] == 1) {
                        if (this.map[i - 2][j - 2] == 1) {
                            if (this.map[i - 3][j - 3] == 1) {
                                if (this.map[i - 4][j - 4] == 1) {
                                    setTimeout(function () { alert("Wygrał gracz Nr 1"); }, 5);
                                }
                            }
                        }
                    } else if (this.map[i + 1][j - 1] == 1) {
                        if (this.map[i + 2][j - 2] == 1) {
                            if (this.map[i + 3][j - 3] == 1) {
                                if (this.map[i + 4][j - 4] == 1) {
                                    setTimeout(function () { alert("Wygrał gracz Nr 1"); }, 5);
                                }
                            }
                        }
                    } else if (this.map[i - 1][j + 1] == 1) {
                        if (this.map[i - 2][j + 2] == 1) {
                            if (this.map[i - 3][j + 3] == 1) {
                                if (this.map[i - 4][j + 4] == 1) {
                                    setTimeout(function () { alert("Wygrał gracz Nr 1"); }, 5);
                                }
                            }
                        }
                    }
                } else if (this.map[i][j] == 2) {
                    if (this.map[i][j - 1] == 2) {
                        if (this.map[i][j - 2] == 2) {
                            if (this.map[i][j - 3] == 2) {
                                if (this.map[i][j - 4] == 2) {
                                    setTimeout(function () { alert("Wygrał gracz Nr 2"); }, 5);
                                }
                            }
                        }
                    } else if (this.map[i][j + 1] == 2) {
                        if (this.map[i][j + 2] == 2) {
                            if (this.map[i][j + 3] == 2) {
                                if (this.map[i][j + 4] == 2) {
                                    setTimeout(function () { alert("Wygrał gracz Nr 2"); }, 5);
                                }
                            }
                        }
                    } else if (this.map[i - 1][j] == 2) {
                        if (this.map[i - 2][j] == 2) {
                            if (this.map[i - 3][j] == 2) {
                                if (this.map[i - 4][j] == 2) {
                                    setTimeout(function () { alert("Wygrał gracz Nr 2"); }, 5);
                                }
                            }
                        }
                    } else if (this.map[i + 1][j] == 2) {
                        if (this.map[i + 2][j] == 2) {
                            if (this.map[i + 3][j] == 2) {
                                if (this.map[i + 4][j] == 2) {
                                    setTimeout(function () { alert("Wygrał gracz Nr 2"); }, 5);
                                }
                            }
                        }
                    } else if (this.map[i - 1][j - 1] == 2) {
                        if (this.map[i - 2][j - 2] == 2) {
                            if (this.map[i - 3][j - 3] == 2) {
                                if (this.map[i - 4][j - 4] == 2) {
                                    setTimeout(function () { alert("Wygrał gracz Nr 2"); }, 5);
                                }
                            }
                        }
                    } else if (this.map[i + 1][j - 1] == 2) {
                        if (this.map[i + 2][j - 2] == 2) {
                            if (this.map[i + 3][j - 3] == 2) {
                                if (this.map[i + 4][j - 4] == 2) {
                                    setTimeout(function () { alert("Wygrał gracz Nr 2"); }, 5);
                                }
                            }
                        }
                    } else if (this.map[i - 1][j + 1] == 2) {
                        if (this.map[i - 2][j + 2] == 2) {
                            if (this.map[i - 3][j + 3] == 2) {
                                if (this.map[i - 4][j + 4] == 2) {
                                    setTimeout(function () { alert("Wygrał gracz Nr 2"); }, 5);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}