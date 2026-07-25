<!-- lastmod 2022-08-02 -->
## General Description

The MAX1572 evaluation kit (EV kit) is a fully assembled and tested circuit board that evaluates the MAX1572 PWM step-down DC-DC converter. The circuit operates from 2.6V to 5.5V and has a fixed 1.5V output capable of  delivering  800mA. It also provides a RESET output. The EV kit can be used to evaluate other output voltage versions of the MAX1572 by replacing the IC.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                              |
|---------------|-------|--------------------------------------------------------------------------------------------------------------------------|
| C1, C2        |     2 | 10µF ± 20%, 6.3V X5R ceramic capacitors (0805) Panasonic ECJ2FB0J106M or TDK C2012X5R0J106M or Taiyo Yuden JMK212BJ106MG |
| C3            |     1 | 1000pF ± 10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H102K or equivalent                                       |
| C4            |     1 | 0.1µF ± 10%, 16V X7R ceramic capacitor (0603) Taiyo Yuden EMK107BJ104KA or equivalent                                    |
| R1            |     1 | 10 Ω ± 5% resistor (0603)                                                                                                |
| JU1, JU2      |     2 | 3-pin headers                                                                                                            |
| L1            |     1 | 2.2µH inductor, 0.17 Ω , 1.2A 3.6mm ✕ 3.6mm ✕ 1.2mm TOKO 976AS-2R2M (D312F family)                                       |
| U1            |     1 | MAX1572ETC150 (12-pin thin QFN 4mm ✕ 4mm)                                                                                |
| None          |     2 | Shunts, position 2                                                                                                       |
| None          |     1 | MAX1572 EV kit PC board                                                                                                  |

## Component Suppliers

| SUPPLIER    | PHONE        | WEBSITE               |
|-------------|--------------|-----------------------|
| Kamaya      | 260-489-1533 | www.kamaya.com        |
| Murata      | 770-436-1300 | www.murata.com        |
| Panasonic   | 714-373-7939 | www.panasonic.com     |
| Taiyo-Yuden | 408-573-4150 | www.t-yuden.com       |
| TDK         | 847-803-6100 | www.component.tdk.com |
| TOKO        | 847-297-0070 | www.toko.com          |

Note: When contacting these component suppliers, please specify you are using the MAX1572.

## Quick Start

Follow the steps below to verify operation of the MAX1572 EV kit. Do not turn on the power supply until all connections are completed:

- 1) Select the desired operating mode with JU1 and JU2 (see Table 1).
- 2) Connect the positive terminal of the voltmeter to the pad labeled OUT. Connect the ground terminal of the  voltmeter  to  the  pad  labeled  GND  nearest  the OUT pad. Connect a load from OUT to the GND pad closest to OUT.
- 3) Preset the power supply to between 2.6V and 5.5V, and turn the power supply off.
- 4) Connect the positive power-supply terminal to the pad labeled IN. Connect the power-supply ground to the pad labeled GND nearest the IN pad.
- 5) Turn on the power supply and verify the output voltage is 1.5V.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

<!-- image -->

## Features

- ♦ 2MHz PWM Switching
- ♦ 800mA Guaranteed Output Current
- ♦ Power-Saving Modes: Pulse Group/ Pulse Skip/Forced PWM
- ♦ Voltage-Positioning Load Transients
- ♦ 5mVP-P Output Ripple
- ♦ Tiny 2.2µH Inductor
- ♦ 10µF Ceramic Output Capacitor
- ♦ Low 0.1µA Shutdown Current
- ♦ Soft-Start with Zero Inrush Current
- ♦ 170ms (min) RESET Output
- ♦ Thin QFN IC Package: 4mm ✕ 4mm ✕ 0.8mm
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE       | IC PACKAGE      |
|--------------|------------------|-----------------|
| MAX1572EVKIT | 0 ° C to +70 ° C | 12 Thin QFN-EP* |

* EP = Exposed paddle.

## Recommended Equipment

- Power supply capable of supplying 500mA from 2.6V to 5.5V
- Voltmeter

## MAX1572 Evaluation Kit

## Detailed Description

## Operating Modes

The operating mode is selected with JU1 and JU2, as shown in Table 1. For details on each operating mode, refer to the MAX1572 data sheet.

## RESET Output

A connection is provided on the MAX1572 EV kit for evaluating the RESET output of the MAX1572. RESET is an open-drain output with an internal 14k Ω pullup resistor to OUT. Refer to the MAX1572 data sheet for details on the operation of RESET .

## ABATT Filter

An RC filter is included on the EV kit to reduce the power-supply noise entering the IC through ABATT. To evaluate the circuit without the filter, short R1 on the PC board and remove C4.

## Evaluating Other Output Voltages

The MAX1572 EV kit comes with the 1.5V output version of the MAX1572 installed. To evaluate other voltage versions, replace the IC with the voltage version part to evaluate. MAX1572 output voltages range from 0.75V to 2.5V. Samples of the standard versions are available from Maxim. Refer to the MAX1572 data sheet for ordering information. When evaluating output voltages less than 1.5V, replace C2 with a 22µF ceramic capacitor.

## Table 1. JU1 and JU2 Functions

Figure 1. MAX1572 EV Kit Schematic

| JU1   | JU2   | EN1 PIN   | EN2 PIN   | MODE        |
|-------|-------|-----------|-----------|-------------|
| 1-2   | 1-2   | GND       | GND       | Shutdown    |
| 1-2   | 2-3   | GND       | IN        | Pulse group |
| 2-3   | 1-2   | IN        | GND       | Pulse skip  |
| 2-3   | 2-3   | IN        | IN        | Forced PWM  |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 2. MAX1572 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

## MAX1572 Evaluation Kit

Figure 3. MAX1572 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX1572 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.