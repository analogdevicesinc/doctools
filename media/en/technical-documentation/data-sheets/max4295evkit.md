<!-- lastmod 2022-08-03 -->
## General Description

The MAX4295 is a mono, switch-mode (Class-D) audio power amplifier intended for multimedia and generalpurpose high-power applications. It has greater than 87% efficiency and is capable of delivering 2W maximum continuous power to a 4 Ω load.

The MAX4295 evaluation kit (EV kit) is a fully assembled and tested surface-mount board. The EV kit is designed to be driven by the lineout or headphone jack of a CD player or to be directly connected to any audio source. The EV kit includes a volume control and a terminal block for quick speaker connection.

## Component List

| DESIGNATION         |   QTY | DESCRIPTION                                                                              |
|---------------------|-------|------------------------------------------------------------------------------------------|
| C1, C8              |     2 | 0.1 µ F, 16V X7R ceramic caps (0603) Taiyo Yuden EMK107BJ104KA or Murata GRM39X7R104K016 |
| C2                  |     1 | 150pF, 50V NPO ceramic cap (0603)                                                        |
| C3                  |     1 | 5pF, 50V NPO ceramic cap (0603)                                                          |
| C4, C12, C13, C14   |     0 | Not installed                                                                            |
| C5, C6, C7, C9, C10 |     5 | 1 µ F, 10V X7R ceramic caps (0805) Taiyo Yuden LMK212BJ105KG or Murata GRM40X7R105K010   |
| C11                 |     1 | 330 µ F, 6.3V POSCAP Sanyo 6TPB330M                                                      |
| J1                  |     1 | 3.5mm stereo jack                                                                        |
| J2                  |     1 | 2-position terminal block for speaker                                                    |
| JU1, JU2, JU3       |     3 | 3-pin jumpers                                                                            |
| L1, L2              |     2 | 15 µ H inductors Coilcraft DO3316P153 or Coiltronics UP2B-150                            |
| R1                  |     1 | 10k Ω , thumbwheel potentiometer                                                         |
| R2, R3              |     2 | 51k Ω ± 5% resistors (0603)                                                              |
| R4                  |     1 | 100k Ω ± 5% resistor (0603)                                                              |
| U1                  |     1 | MAX4295EEE (16-pin QSOP)                                                                 |

<!-- image -->

## Features

- ♦ 2W/Channel Output Power at 5V 0.7W/Channel Output Power at 3V
- ♦ Programmable PWM Oscillator Frequency Selection (125kHz, 250kHz, 500kHz, 1MHz)
- ♦ Low 0.4% THD+N (RL = 4 Ω , f IN = 1kHz, fOSC = 250kHz)
- ♦ +2.7V to +5.5V Input Range
- ♦ Volume Control
- ♦ Fully Assembled and Tested Surface-Mount Board

## Ordering Information

| PART         | TEMP. RANGE      | IC PACKAGE   |
|--------------|------------------|--------------|
| MAX4295EVKIT | 0 ° C to +70 ° C | 16 QSOP      |

## Component Suppliers

| SUPPLIER    | PHONE        | FAX          |
|-------------|--------------|--------------|
| Coilcraft   | 847-639-6400 | 847-639-1469 |
| Coiltronics | 561-241-7876 | 561-241-9339 |
| Murata      | 814-237-1431 | 814-238-0490 |
| Sanyo       | 619-661-6835 | 619-661-1055 |
| Taiyo Yuden | 408-573-4150 | 408-573-4159 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

## MAX4295 Evaluation Kit

## Quick Start

## Required Equipment

- One 4 Ω /8 Ω speaker
- One DC power supply capable of supplying +2.7V to +5.5V at 1.5A

The MAX4295 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Do not turn on the power supply until all connections are completed:

- 1) Connect the speaker to terminal blocks J2.
- 2) Connect an audio source, such as a CD player, to stereo jack J1 or the IN and AUDIO-GND pads.
- 3) Set the jumpers to the following positions: JU1: 2-3 (FS2 = low) } f OSC = 250kHz JU2: 1-2 (FS1 = high) JU3: 1-2 (MAX4295 enabled)
- 4) Connect a DC power supply to the VCC and GND pads.
- 5) Turn on the audio source.
- 6) Adjust the volume control, if necessary.

## Detailed Description

The MAX4295 EV kit is a mono, switch-mode (Class-D) audio power amplifier. The EV kit is designed to be dri-

## Table 1. Jumper Selection

| JUMPER   | JUMPER POSITION   | FUNCTION                                |
|----------|-------------------|-----------------------------------------|
| JU1      | 1-2               | Frequency select pin FS2 = VCC.         |
| JU1      | 2-3*              | Frequency select pin FS2 = GND.         |
| JU2      | 1-2*              | Frequency select pin FS1 = VCC.         |
| JU2      | 2-3               | Frequency select pin FS1 = GND.         |
| JU3      | 1-2*              | SHDN = high. MAX4295 enabled.           |
| JU3      | 2-3               | SHDN = low. MAX4295 disabled.           |
| JU3      | Open              | Drive pad SHDN with an external signal. |

*Default position.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

ven by the lineout or headphone jack of a CD player or directly connected to any audio source. A thumbwheel potentiometer mounted to the board is provided to control volume.

The EV kit is shipped with the components selected for driving 4 Ω speakers with the MAX4295 set to unity gain. The gain can be increased by changing resistor R4. See the equation below for determining values:

<!-- formula-not-decoded -->

To drive a speaker other than 4 Ω , replace inductors L1 and L2 and capacitors C6 and C7. Refer to the MAX4295/MAX4297 data sheet for selecting the values.

## Jumper Selection

Jumpers JU1 and JU2 control frequency select pins FS1 and FS2. See Tables 1 and 2 for the shunt positions.

Note: The MAX4295 EV kit is optimized for a 250kHz switching frequency. Inductors L1 and L2 and capacitors  C6  and C7 may need to be optimized for other switching frequencies. Refer to the MAX4295/MAX4297 data sheet for selecting the values.

Jumper JU3 controls the shutdown pin ( SHDN )  on  the MAX4295. See Table 1 for shunt positions.

Table 2. Frequency Selection

| JU1 (FS2)   | JU2 (FS1)   | FREQUENCY   |
|-------------|-------------|-------------|
| 2-3 (GND)   | 2-3 (GND)   | 125kHz      |
| 2-3 (GND)   | 1-2 (VCC)   | 250kHz      |
| 1-2 (VCC)   | 2-3 (GND)   | 500kHz      |
| 1-2 (VCC)   | 1-2 (VCC)   | 1MHz        |

<!-- image -->

## MAX4295 Evaluation Kit

Figure 1. MAX4295 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

3

## MAX4295 Evaluation Kit

<!-- image -->

Figure 2. MAX4295 Component Placement GuideComponent Side

Figure 3. MAX4295 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX4295 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4