<!-- lastmod 2022-08-03 -->
<!-- image -->

## General Description

The MAX11503 evaluation kit (EV kit) is a fully assembled and tested surface-mount printed-circuit board (PCB). The MAX11503 EV kit evaluates the MAX11503 IC,  a  video  amplifier  with  Y/C  summer and chroma mute. The MAX11503 operates at 3V (typ) and drives two terminated 75 Ω loads at an overall gain of +6dB.

## Component List

| DESIGNATION     |   QTY | DESCRIPTION                                                                                           |
|-----------------|-------|-------------------------------------------------------------------------------------------------------|
| C1              |     1 | 10µF ±20%, 6.3V X7R ceramic capacitor (0805) Murata GRM21BR70J106K TDK C2012X7R0J106K or equivalent   |
| C2, C3, C4      |     3 | 0.1µF ±10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C104K TDK C1608X7R1C104KT or equivalent |
| C5, C6          |     0 | Not installed, aluminum electrolytic capacitors (6.3mm x 6mm)                                         |
| C_IN, OUT, Y_IN |     3 | 75 Ω BNC PCB-mount jack connectors                                                                    |
| JU1, JU2        |     2 | 3-pin headers                                                                                         |
| JU3, JU4        |     2 | 2-pin headers                                                                                         |
| R1, R2, R3      |     3 | 75 Ω ±1% resistors (0603)                                                                             |
| R5, R6          |     2 | 0 Ω resistors (0603)                                                                                  |
| U1              |     1 | Video filter amplifier (8-pin µMAX ® ) Maxim MAX11503EUA+                                             |
| -               |     4 | Shunts                                                                                                |
| -               |     1 | PCB: MAX11503 Evaluation Kit+                                                                         |

µMAX is a registered trademark of Maxim Integrated Products, Inc.

Features

- ♦ 2.7V to 5.25V Operating Range
- ♦ DC- or AC-Coupled Input
- ♦ DC- or AC-Coupled Output
- ♦ Surface-Mount Construction
- ♦ Fully Assembled and Tested

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX11503EVKIT+ | EV Kit |

## Component Suppliers

| SUPPLER               | PHONE        | WEBSITE               |
|-----------------------|--------------|-----------------------|
| Murata Mfg. Co., Ltd. | 770-436-1300 | www.murata.com        |
| TDK Corp.             | 847-803-6100 | www.component.tdk.com |

Note: Indicate that you are using the MAX11503 when contacting these component suppliers.

## MAX11503 Evaluation Kit

## Quick Start

## Recommended Equipment

Before beginning, the following equipment is needed:

- 3V DC power supply
- Video signal generator (e.g., Tektronix TG2000 or similar)
- Video measurement equipment (e.g., Tektronix VM700A or similar)

## Procedure

The MAX11503 EV kit is a fully assembled and tested surface-mount PCB. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Verify  that  a  shunt  is  installed  across  pins  1-2  of jumper JU1 (power-up).
- 2) Verify  that  a  shunt  is  installed  across  pins  2-3  of jumper JU2 (summer is enabled).
- 3) Connect the output of the video signal generator to the Y\_IN (luma) and C\_IN (chroma) BNC connectors on the EV kit.
- 4) Connect the composite CVBS video output signal from the OUT BNC connector on the EV kit to the input of the video measurement equipment.
- 5) Connect a 3V supply to the VCC pad. Connect the supply ground to the GND pad.
- 6) Set the video signal generator for the desired video input signals. This signal must contain sync information (i.e., composite or Y).
- 7) Turn on the power supply and enable the video signal generator.
- 8) Analyze the output signal with the VM700A video measurement equipment.

## Detailed Description

The MAX11503 EV kit evaluates the MAX11503 3V operation video amplifier with Y/C summer and a chroma mute that can drive two terminated 75 Ω video loads. The MAX11503 EV kit accepts AC-coupled Y (luma) and C (chroma) input signals summing them into a composite CVBS output signal with gain of +6dB.

## Output Signal

The MAX11503 EV kit can provide a sag-corrected DCor AC-coupled composite CVBS or Y (luma) signal. The default output signal is set as DC-coupled composite CVBS. To change the output signal to sag-corrected AC-coupled, remove the R5 and R6 0 Ω resistors  and install a 68µF and a 22µF aluminum electrolytic capacitor on the C5 and C6 pads, respectively.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Jumper Selection

The EV kit incorporates jumper JU1 to control the PSAVE pin. The PSAVE pin puts the device into a lowpower mode. See Table 1 for jumper JU1 settings.

## Table 1. Jumper JU1 Settings

| SHUNT POSITION   | PSAVE PIN        | MAX11503 OUTPUT   |
|------------------|------------------|-------------------|
| 1-2*             | Connected to VCC | Enabled           |
| 2-3              | Connected to GND | Disabled          |

The EV kit incorporates jumper JU2 to control the CMUTE pin. The CMUTE pin provides options to enable or  disable  the  chroma input signal from the summer. See Table 2 for jumper JU2 settings.

## Table 2. Jumper JU2 Settings

| SHUNT POSITION   | CMUTE PIN        | MAX11503 OUTPUT       |
|------------------|------------------|-----------------------|
| 1-2              | Connected to VCC | Y (luma) signal       |
| 2-3*             | Connected to GND | Composite CVBS signal |

## Input Signals

The MAX11503 accepts either DC- or AC-coupled luma input signals that are selected with jumpers JU3 and JU4, as shown in Table 3. The MAX11503 is configured for AC-coupled inputs by default. When using DC-coupled inputs, make sure that the luma input signal has a sync tip near ground.

## Table 3. Jumper JU3, JU4 Settings

| SHUNT POSITION   | MAX11503 INPUT   |
|------------------|------------------|
| Installed        | DC-coupled       |
| Not installed*   | AC-coupled       |

## MAX11503 Evaluation Kit

<!-- image -->

Figure 1. MAX11503 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX11503 Evaluation Kit

Figure 2. MAX11503 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX11503 Evaluation Kit

<!-- image -->

Figure 3. MAX11503 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX11503 Evaluation Kit

Figure 4. MAX11503 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

Boblet