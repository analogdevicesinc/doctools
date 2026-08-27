<!-- lastmod 2022-08-03 -->
## General Description

The MAX4299 evaluation kit (EV kit) is a fully assembled and tested circuit board that uses the MAX4299 audio system IC designed for a single 5V application. The audio system IC features a stereo headphone driver, microphone amplifier, and a 3.3V linear regulator.

The EV kit's headphone driver is capable of driving 1.2VRMS into a 32 Ω headphone. The microphone amplifier is capable of driving 1.5VRMS into a 10k Ω load. A 3.3V linear regulator is capable of supplying 100mA.

## Component Suppliers

| SUPPLIER              | PHONE        | FAX          |
|-----------------------|--------------|--------------|
| AVX                   | 843-448-9411 | 843-448-1943 |
| Central Semiconductor | 631-435-1110 | 631-435-1824 |
| Taiyo Yuden           | 800-348-2496 | 847-925-0899 |

Note: Please indicate that you are using the MAX4299 when contacting these component suppliers.

| DESIGNATION   |   QTY | DESCRIPTION                                                                   |
|---------------|-------|-------------------------------------------------------------------------------|
| C1, C10       |     2 | 10µF, 6.3V X5R ceramic capacitors (1206) Taiyo Yuden JMK316BJ106ML            |
| C2, C3, C6    |     3 | 0.33µF, 10V X5R ceramic capacitors (0603) Taiyo Yuden LMK107BJ334KA           |
| C4, C5, C12   |     3 | 1µF, 6.3V X5R ceramic capacitors (0603) Taiyo Yuden JMK107BJ105KA             |
| C7, C8, C9    |     3 | 220µF, 6.3V tantalum capacitors (Case C) AVX TAJC227K006                      |
| C11           |     1 | 0.1µF, 16V X7R ceramic capacitor (0603) Taiyo Yuden EMK107BJ104KA             |
| D1            |     1 | 0.2A, 30V super-mini Schottky- diode (SOD-323) Central Semiconductor CMDSH2-3 |

<!-- image -->

## Features

- ♦ 4.5V to 5.5V Single-Supply Operation
- ♦ Clickless/Popless Power-Up, Power-Down, Mute and Unmute
- ♦ PC99-Compliant Output Drivers: Better than 1.2VRMS Output into 32 Ω Audio Load
- ♦ PC99-Compliant Microphone Amplifier: Better than 1.5VRMS Output into 10k Ω Load
- ♦ Small 16-Pin TSSOP Package
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE   |
|--------------|--------------|--------------|
| MAX4299EVKIT | 0°C to +70°C | 16 TSSOP     |

## Component List

| DESIGNATION        |   QTY | DESCRIPTION                     |
|--------------------|-------|---------------------------------|
| J1                 |     1 | Right-angle phono jack (white)  |
| J2                 |     1 | Right-angle phono jack (red)    |
| J3                 |     1 | Right-angle phono jack (yellow) |
| J4, J5             |     2 | 3.5mm stereo jacks              |
| R1, R4, R5, R6, R8 |     5 | 20k Ω ±1% resistors (0805)      |
| R2, R3             |     0 | Not installed (0805)            |
| R7                 |     1 | 200k Ω ±1% resistor (0805)      |
| R9                 |     1 | 2k Ω ±1% resistor (0805)        |
| R10, R11, R12      |     3 | 100k Ω ±5% resistors (0805)     |
| JU1                |     1 | 2-pin header                    |
| JU2                |     1 | 3-pin header                    |
| None               |     2 | Shunts (JU1, JU2)               |
| None               |     1 | MAX4299 PC board                |
| None               |     1 | MAX4299 data sheet              |
| None               |     1 | MAX4299 EV kit data sheet       |
| U1                 |     1 | MAX4299EUE, 16-pin TSSOP        |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

1

## MAX4299 Evaluation Kit

## Quick Start

The MAX4299 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

## Recommended Equipment

- 5V, 1A power supply
- Stereo headphone with 3.5mm plug
- Microphone
- Audio source
- One voltmeter

## AVDD Output

- 1) Connect the positive lead of the voltmeter to the AVDD pad, and the negative lead of the voltmeter to the GND pad.
- 2) Connect the 5V of the power supply to the VCC pad and the power supply ground to the PGND pad.
- 3) Turn on the power supply, and set the output of the power supply to 5V.
- 4) Verify that the AVDD pad is approximately 3.3V.

## Headphone Drivers

- 1) Verify that Jumper JU1 does not have a shunt installed.
- 2) Verify  that  Jumper  JU2  has  a  shunt  across  pins  2 and 3.
- 3) Connect an audio source to jacks J1 (left) and J3 (right).
- 4) Connect the stereo headphone to the J5 jack.
- 5) Turn on the audio source.

## Microphone Amplifier

- 1) Verify that Jumper JU1 does not have a shunt installed.
- 2) Verify  that  Jumper  JU2  has  a  shunt  across  pins  2 and 3.
- 3) Connect a microphone to the MICIN jack J4.
- 4) Remove the audio source from jacks J1 and J3, and connect the MICOUT jack (J2) to J1.
- 5) Connect a stereo headphone to jack J5 (headphone out).

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- 6) Speak into the microphone and detect the audio signal with the headphone (left channel only).

## Detailed Description

The MAX4299 EV kit uses a MAX4299 audio system IC designed for 5V applications. The audio system IC features a stereo headphone driver, a microphone amplifier,  and  a  3.3V  linear  regulator.  In  addition,  the  EV  kit also includes a mute function and a standby powersupply (SVCC) pad for the user.

The MAX4299 EV kit is configured to receive two audio sources (left and right). The two audio sources are current-amplified (unity-voltage gain) to drive up to 1.2VRMS into a 32 Ω stereo headphone. The microphone amplifier has voltage gain of -10V/V and is capable of driving 1.5VRMS into a 10k Ω load. The 3.3V linear regulator is capable of supplying up to 100mA. Resistors R2 and R3 may be added to adjust the output of the linear regulator between 1.2V and 4.5V. Refer to the Regulator section of the MAX4299 data sheet.

## Jumper Selection

## Mute

Jumper JU1 controls the mute pin (MUTE) on the MAX4299 IC. Mute is a clickless function that turns off the headphone without having to power-down the whole system. The mute function may be activated on the EV kit by installing a shunt across pins 1 and 2 of jumper JU1. The mute function may also be controlled by an external source connected to the MUTE pad and removing the shunt on jumper JU1. See Table 1 for shunt positions.

## Standby Power Supply

Jumper JU2 selects between an external standby power supply (SVCC) or the on-board SVCC. The standby power-supply pin (SVCC) draws a small amount of reserve power to drive a clickless/popless power-down sequence. The reserve power for SVCC can be stored in the capacitor C9. Capacitor C9 is charged by VCC through Schottky diode D1. The SVCC pin can also be powered by an external source connecting to the SVCC pad and reconfiguring jumper JU2. (See Table 2 for shunt positions.)

<!-- image -->

Table 1. JU1 Jumper Selection

| JUMPER   | JUMPER POSITION                              | EV KIT FUNCTION                                      |
|----------|----------------------------------------------|------------------------------------------------------|
| JU1      | Installed (MUTE = high)                      | Mute enabled                                         |
| JU1      | None (MUTE = low)                            | Mute disabled                                        |
| JU1      | None. External source connected to MUTE pad. | MUTE driven by external source. Mute is active high. |

<!-- image -->

## MAX4299 Evaluation Kit

Table 2. JU2 Jumper Selection

| JUMPER   | JUMPER POSITION   | EV KIT FUNCTION                                   |
|----------|-------------------|---------------------------------------------------|
| JU2      | 1-2               | SVCCpin powered by external source (4.5V to 5.5V) |
| JU2      | 2-3               | SVCCpin powered by VCC pad through D1             |
| JU2      | None              | SVCCis not powered. Clickless/Popless disabled.   |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4299 Evaluation Kit

Figure 1. MAX4299 EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 2. MAX4299 EV Kit Component Placement GuideComponent Side

<!-- image -->

## MAX4299 Evaluation Kit

Figure 3. MAX4299 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX4299 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.