<!-- lastmod 2022-08-02 -->
## General Description

The MAX9930 evaluation kit (EV kit) is a fully assembled and tested surface-mount printed-circuit board (PCB) that  evaluates the MAX9930 RF-detecting controller. The MAX9930 EV kit includes on-board shutdown control,  as  well  as  quasi-measurement mode circuitry to provide an easy method to evaluate the MAX9930. The RF input utilizes a 50 Ω SMA connector for convenient connection to test equipment.

The MAX9930 EV kit comes with the MAX9930EUA+ i nstalled,  but  can  also  be  used  to  evaluate  the MAX9931/MAX9932 RF-detecting controllers and the MAX9933 RF detector. To evaluate the MAX9931, MAX9932, or MAX9933, request a MAX9931EUA+, a MAX9932EUA+, or a MAX9933EUA+ free sample with the MAX9930 EV kit.

| DESIGNATION   |   QTY | DESCRIPTION                                                                                |
|---------------|-------|--------------------------------------------------------------------------------------------|
| C1            |     1 | 33pF ±5%, 50V C0G ceramic capacitor (0402) TDK C1005C0G1H330J Taiyo Yuden UMK105CG330JV    |
| C2, C4        |     2 | 100pF ±5%, 50V C0G ceramic capacitors (0402) TDK C1005COG1H101J Taiyo Yuden UMK105CG101JW  |
| C3            |     1 | 2200pF ±10%, 50V X7R ceramic capacitor (0402) TDK C1005X7R1H222K Taiyo Yuden UMK105BJ222KW |
| C5, C7, C8    |     3 | 0.1µF ±10%, 10V X5R ceramic capacitors (0402) TDK C1005X5R1A104K Taiyo Yuden LMK105BJ104KV |
| C6            |     0 | Not installed, capacitor (0402)                                                            |
| C9            |     1 | 22nF ±10%, 16V X7R ceramic capacitor (0402) TDK C1005X7R1C223K Taiyo Yuden EMK105BJ223KV   |

µMAX is a registered trademark of Maxim Integrated Products, Inc.

<!-- image -->

## Features

- ♦ 2.7V to 5.25V Single-Supply Operation
- ♦ 50 Ω SMA Connector on RF Input
- ♦ On-Board Quasi-Measurement Mode Circuitry
- ♦ On-Board Shutdown Control
- ♦ Fully Assembled and Tested Surface-Mount PCB

## Ordering Information

| PART          | TEMP RANGE    | IC PACKAGE   |
|---------------|---------------|--------------|
| MAX9930EVKIT+ | 0°C to +70°C* | 8 µMAX ®     |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                             |
|---------------|-------|---------------------------------------------------------|
| JU1, JU2      |     2 | 3-pin headers                                           |
| JU3           |     1 | 2-pin header                                            |
| R1            |     1 | 52.3 Ω ±1% resistor (0402)                              |
| R2            |     1 | 0 Ω ±5% resistor (0402)                                 |
| R3            |     0 | Not installed, resistor (0402)                          |
| R4, R5, R8    |     3 | 10k Ω ±1% resistors (0402)                              |
| R6            |     1 | 100 Ω ±1% resistor (0402)                               |
| R7            |     1 | 14k Ω ±1% resistor (0402)                               |
| RFIN          |     1 | SMA connector (PC edge mount)                           |
| U1            |     1 | MAX9930EUA+ (8-pin µMAX)                                |
| U2            |     1 | Maxim high-output drive op amp MAX4412EXK+ (5-pin SC70) |
| -             |     3 | Shunts                                                  |
| -             |     1 | PCB: MAX9930 Evaluation Kit+                            |

## Component Suppliers

| SUPPLIER    | PHONE        | WEBSITE               |
|-------------|--------------|-----------------------|
| Taiyo Yuden | 800-348-2496 | www.t-yuden.com       |
| TDK Corp.   | 847-803-6100 | www.component.tdk.com |

Note: Indicate that you are using the MAX9930 when contacting these component suppliers.

## MAX9930 Evaluation Kit

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ \_\_Quick Start

## Recommended Equipment

Before beginning, the following equipment is needed:

- One variable DC power supply capable of supplying between 2.7V and 5.25V at 50mA
- One signal generator capable of delivering -45dBm to +0dBm at frequencies between 2MHz and 1.6GHz
- One voltmeter

## Procedure

The MAX9930 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Set the variable DC power supply to 3V.
- 2) Ensure that the variable DC power supply is turned off.
- 3) Connect the positive terminal of the variable DC power supply to the pad marked VCC. Connect the ground return of the variable DC power supply to the pad marked GND.
- 4) Set the signal generator to produce an output signal of 0dBm at a frequency of 50MHz.
- 5) Ensure that the signal generator is turned off.
- 6) Connect the signal generator to the edge-mount SMA connector marked RFIN.
- 7) Connect the positive terminal of the voltmeter to the pad marked SET. Connect the ground return of the voltmeter to the pad marked GND.
- 8) Ensure that a shunt is installed across pins 1-2 of jumper JU1.
- 9) Ensure that a shunt is installed across pins 2-3 of jumper JU2.
- 10) Ensure that a shunt is installed across jumper JU3.
- 11) Turn on the variable DC power supply.
- 12) Turn on/enable the output of the signal generator.
- 13) Verify  with  the  voltmeter  that  an  output  voltage  of approximately 1.4V is produced between the SET pad and the GND pad.

## Detailed Description

The MAX9930 EV kit is a fully assembled and tested surface-mount PCB that evaluates the MAX9930 RF-detecting controller. The MAX9930 EV kit can also be used to evaluate the MAX9931/MAX9932 RF-detecting controllers and the MAX9933 RF detector. The MAX9930 EV kit includes on-board shutdown control, as well as quasimeasurement mode circuitry to provide an easy method to evaluate the MAX9930, MAX9931, and MAX9932. The RF input utilizes a 50 Ω SMA connector for convenient connection to test equipment.

For operation in controller mode, both JU2 and JU3 should be removed. Use a DAC or external precision voltage supply to apply the set-point voltage to the SET pad. RFIN is connected to the RF source-power amplifier  (PA)  output  through  a  directional  coupler-and the OUT pad is connected to the gain-control pin of the PA. When used in controller mode, a capacitor must be installed in C3 for loop stability (see the Filter Capacitor Selection section).

To simulate an automatic gain-control (AGC) loop, a quasi-measurement mode can be implemented where the MAX9930 delivers an output voltage that is proportional to the log of the input signal (see the Quasi-Measurement Mode section). To establish the transfer function of the log amp, the RF input power level should be swept while the voltage at the SET pad is  measured. This is the simplest method to validate operation of the evaluation board.

## Shutdown Control

Jumper JU1 controls the CMOS-compatible shutdown pin ( SHDN )  of  the  MAX9930, which disables the MAX9930. Removing the shunt from JU1 allows the SHDN pin  to  be  driven  with  an  external  signal  source connected to the SHDN pad (see Table 1 for shutdown shunt positions).

## Table 1. Shutdown Selection

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                  |
|----------|------------------|----------------------------------------------|
| JU1      | 1-2*             | MAX9930 enabled                              |
| JU1      | 2-3              | MAX9930 disabled                             |
| JU1      | Not installed    | SHDN pin driven by an external signal source |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Quasi-Measurement Mode

Enabling the quasi-measurement mode changes the MAX9930 EV kit function from a PA controller to a log detector. This mode allows for easy measurement of RFIN versus the SET voltage and these measurements can then be used to find the intercept and slope required for the given application.

Place a shunt on pins 2-3 of JU2 and install a shunt across JU3 to enable the quasi-measurement mode. This configuration connects the OUT voltage through an inverting op amp to the SET pin. The quasi-measurement mode yields a nominal relationship between RFIN and SET. See Table 2 for quasi-measurement mode shunt positions.

## Table 2. Quasi-Measurement Mode Selection

| SHUNT POSITION   | SHUNT POSITION   | QUASI-MEASUREMENT MODE   |
|------------------|------------------|--------------------------|
| JU2              | JU3              | QUASI-MEASUREMENT MODE   |
| 1-2              | X                | Disabled                 |
| 2-3*             | Installed*       | Enabled                  |
| X                | Not installed    | Disabled                 |
| Not installed    | X                | Disabled                 |

X = a 'don't care' position.

## Filter Capacitor Selection

When functioning as a PA controller, the MAX9930 requires some capacitance to maintain loop stability. Global Satellite Mobile (GSM) applications require a control-loop bandwidth of at least 150kHz. A 2200pF capacitor (C4) is installed to obtain this control-loop

<!-- image -->

## MAX9930 Evaluation Kit

bandwidth. Refer to the Gain and Phase vs. Frequency graph in the Applications Information section of the MAX9930/MAX9931/MAX9932 IC data sheet for alternative capacitor values.

## Evaluating the MAX9931/MAX9932

The MAX9930 can be replaced with the MAX9931 to allow an input range of -35dBm to +10dBm into 50 Ω , or with the MAX9932 to allow an input range of -30dBm to +15dBm into 50 Ω .  Replace U1 with a MAX9931EUA+ or MAX9932EUA+.

## Evaluating the MAX9933

The MAX9930 can be replaced with the MAX9933 to allow an input range of -45dBm to +0dBm into 50 Ω . Replace U1 with a MAX9933EUA+. Once a MAX9933 IC is installed on U1, remove the shunt on JU3 to disconnect the quasi-measurement mode circuitry. Place the shunt on pins 1-2 of JU2 to connect pin 3 of the MAX9933 to ground. The voltage on the OUT pad reflects the power level of the RF input signal.

## Layout Considerations

A  good  PCB  layout  is  an  essential  part  of  RF circuit  design.  The  MAX9930EV kit  PCB can serve as  a  guide  for  laying  out  a  board  using  the MAX9930-MAX9933. Keep traces carrying RF signals as short as possible to minimize radiation and insertion loss due to the PCB. Each VCC node on the PCB should have its own decoupling capacitor. This minimizes supply  coupling from one section of the PCB to another. Using a star topology for the supply layout, in which each VCC node in the circuit has a separate connection to the central VCC node, can further minimize coupling between sections of the PCB.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9930 Evaluation Kit

Figure 1. MAX9930 EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 2. MAX9930 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 4. MAX9930 EV Kit PCB Layout-Ground Plane on Layer 2

<!-- image -->

## MAX9930 Evaluation Kit

Figure 3. MAX9930 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 5. MAX9930 EV Kit PCB Layout-Ground Plane on Layer 3

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9930 Evaluation Kit

Figure 6. MAX9930 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

© 2007 Maxim Integrated Products