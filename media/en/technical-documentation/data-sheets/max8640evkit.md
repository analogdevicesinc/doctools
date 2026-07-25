<!-- lastmod 2022-08-02 -->
## General Description

The MAX8640 evaluation kit (EV kit) is a fully assembled and tested circuit for evaluating the MAX8640 stepdown DC-DC converter. The MAX8640 EV kit operates from a 2.7V to 4.9V supply and provides a 500mA output.  The 1.8V/2MHz version of the MAX8640 comes installed in the EV kit, but the same board can be used to  evaluate  the  other  versions.  The  MAX8640 is available with factory preset output voltages ranging from 0.8V to 2.5V.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                |
|---------------|-------|--------------------------------------------------------------------------------------------|
| C1            |     1 | 2.2µF ±20%, 6.3V X5R ceramic capacitor (0603) Taiyo Yuden JMK107BJ225KA TDK C1608X5R0J225K |
| C2            |     1 | 4.7µF ±20%, 6.3V X5R ceramic capacitor (0603) TDK C1608X5R0J475M                           |
| JU1           |     1 | 3-pin header                                                                               |
| L1            |     1 | 2.2µH, 1.3A, 80m Ω inductor (2.5mm x 2.0mm) FDK MIPF2520D2R2                               |
| L2            |     1 | 2.2µH inductor (0603) Taiyo Yuden CBMF1608T2R2M (not connected in circuit)                 |
| U1            |     1 | MAX8640YEXT18+ (6-pin SC70-6)                                                              |
| -             |     1 | Shunt, 2-position                                                                          |

<!-- image -->

Features

- ♦ Tiny 6-Pin SC70 IC Package
- ♦ 500mA Guaranteed Output Current
- ♦ Tiny External Components: (1µH/2.2µF or 2.2µH/4.7µF)
- ♦ 24µA Quiescent Current
- ♦ ±1% Initial Accuracy
- ♦ Ultra-Fast Line and Load Transient Response
- ♦ Low Output Ripple at All Loads
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE   |
|--------------|--------------|--------------|
| MAX8640EVKIT | 0°C to +70°C | 6 SC70-6     |

## Quick Start

## Recommended Equipment

- 2.7V to 4.9V power supply capable of delivering 500mA
- Voltmeter
- Load (up to 500mA)

## Procedure

The MAX8640 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Place the shunt across pins 2-3 of JU1 of the EV kit to enable the converter.
- 2) Set the power-supply voltage between 2.7V and 4.9V. Turn the power supply off.
- 3) Connect the positive power-supply lead to the EV kit  pad  labeled IN. Connect the power-supply ground to the EV kit pad labeled GND.
- 4) Connect the load between the EV kit pads labeled OUT and GND.
- 5) Turn on the power supply.
- 6) Connect a voltmeter across the EV kit terminals OUT and GND to verify that the output voltage is 1.8V.

1

## MAX8640 Evaluation Kit

## Detailed Description

## Safe Operating Region and Power Dissipation

The MAX8640 delivers up to 0.5A and operates with input voltages up to 4.9V, but not simultaneously. The power dissipated in the MAX8640 must not exceed the maximum  power  dissipation  of  245mW  (derate 3.1mW/°C above TA = +70°C) for the SC70 package that is  installed  on  the  EV  kit  by  default,  or  167mW  (derate 2.1mW/°C above TA = +70°C) for the µDFN package. The operating power dissipation of the MAX8640 depends on the output current and the duty cycle (output to input voltage ratio). Figures 1 and 2 show the safe operating area of the MAX8640 in the SC70 and µDFN packages. To ensure the maximum power dissipation is not exceeded, operate the MAX8640 at or below the levels shown in these figures.

## Evaluating Other Versions of the MAX8640

The MAX8640 EV kit comes with the MAX8640YEXT18+ (1.8V output, 2MHz) version installed, but any version of the MAX8640 can be used. The footprint provided on the EV kit supports both SC70 and µDFN packages. To evaluate other versions, carefully remove the MAX8640 from the EV kit and replace with the desired part. The input and output capacitors and inductor may also need to be changed for optimum performance. A tiny 1µH inductor can also be used with the MAX8640Z (4MHz). Refer to the MAX8640Y/MAX8640Z data sheet for information on component selection.

## Table 1. JU1 Functions

| SHUNT POSITION   | FUNCTION   |
|------------------|------------|
| 1-2              | Shutdown   |
| 2-3              | Enable     |

Figure 1. SC70 Safe Operating Area

<!-- image -->

Figure 2. µDFN Safe Operating Area

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX8640 Evaluation Kit

<!-- image -->

Figure 3. MAX8640 EV Kit Schematic

Figure 4. MAX8640 EV Kit Component Placement GuideComponent Side

<!-- image -->

<!-- image -->

Figure 5. MAX8640 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8640 Evaluation Kit

Figure 6. MAX8640 EV Kit PCB Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Revision History

Pages changed at Rev 1: 1, 2, 3

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600