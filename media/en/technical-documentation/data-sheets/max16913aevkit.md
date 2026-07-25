<!-- lastmod 2022-08-03 -->
<!-- image -->

## MAX16913A Evaluation Kit

## General Description

The MAX16913A evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board that evaluates the MAX16913A high-voltage, high-side current-sense switches. The EV kit operates from a DC supply voltage from 5V to 18V. The EV kit demonstrates the device's open-drain fault signals ( OL and SC ), open-load threshold setting input (OLT), and shutdown function (SHDN).

The MAX16913A EV kit can also be used to evaluate the MAX16913, which features an internally set openload threshold. To evaluate the MAX16913, request a free sample of the MAX16913GEE+ when ordering the MAX16913A EV kit.

| DESIGNATION   |   QTY | DESCRIPTION                                                                                   |
|---------------|-------|-----------------------------------------------------------------------------------------------|
| C1            |     1 | 0.01µF ±10%, 100V X7R ceramic capacitor (0805) Murata GRM21BR72A103KA TDK C2012X7R2A103K      |
| C2, C5        |     2 | 100µF ±10%, 63V electrolytic capacitors (10mm x 10.2mm) SANYO 63CE100PC Panasonic EEEFK1J101P |
| C3, C6        |     2 | 0.1µF ±10%, 100V X7R ceramic capacitors (0603) Murata GRM188R72A104KA                         |
| C4            |     1 | 2.2µF ±10%, 50V X7R ceramic capacitor (1206) Murata GRM31CR71H225K KEMET C1206C225K5RACTU     |
| D1            |     1 | 1A diode (SMA) Fairchild S1G Vishay S1G                                                       |
| IN, REF, SENS |     3 | Miniature test points                                                                         |
| JU1, JU4      |     2 | 2-pin headers, 0.1in centers                                                                  |
| JU2           |     1 | 3-pin header, 0.1in centers                                                                   |

Features

- ♦ 5V to 18V Input Range
- ♦ Tolerates Inputs Up to 42V
- ♦ Resistor-Adjustable Open-Load Threshold
- ♦ Open-Load Threshold Setting Input (OLT, MAX16913A only)
- ♦ Open-Drain, Open-Load Indicator Output ( OL )
- ♦ Open-Drain, Short-Circuit Indicator Output ( SC )
- ♦ Lead(Pb)-Free and RoHS Compliant
- ♦ Fully Assembled and Tested

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX16913AEVKIT+ | EV Kit |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                 |
|---------------|-------|-----------------------------------------------------------------------------|
| JU3           |     0 | Not installed, 2-pin header, 0.1in centers                                  |
| LED1          |     1 | Yellow LED (0805)                                                           |
| LED2          |     1 | Red LED (0805)                                                              |
| R1            |     1 | 1 Ω ±1% sense resistor (0805) IRC LVC-LVC0805LF-1R00-F Vishay L0805M1R00FST |
| R2            |     1 | 10k Ω ±5% resistor (0805)                                                   |
| R3            |     1 | 464k Ω ±1% resistor (0805)                                                  |
| R4            |     1 | 100k Ω ±1% resistor (0805)                                                  |
| R5            |     1 | 115k Ω ±1% resistor (0805)                                                  |
| R6, R7        |     2 | 1k Ω ±5% resistors (0805)                                                   |
| U1            |     1 | Remote antenna current-sense amplifier (16 QSOP) Maxim MAX16913AGEE+        |
| U2            |     1 | 5V linear regulator (8 SO-EP*) Maxim MAX15006BASA+                          |
| -             |     1 | PCB: MAX16913A Evaluation Kit+                                              |

1

## MAX16913A Evaluation Kit

## Procedure

The MAX16913A EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on power until all connections are completed.

- 1) Verify that shunts are installed on jumpers JU1 and JU4.
- 2) Verify that the shunt on jumper JU2 is shorting pins 2-3.
- 3) Connect the power supply across the VIN and GND pads.
- 4) Connect the load across the OUT and GND pads.
- 5) Configure the power supply for 10V.
- 6) Configure the load for 20mA.
- 7) Enable the power supply then enable the load.
- 8) Verify that AOUT is approximately 0.66V.

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Fairchild Semiconductor                | 888-522-5372 | www.fairchildsemi.com       |
| KEMET Corp.                            | 864-963-6300 | www.kemet.com               |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Panasonic Corp.                        | 800-344-2112 | www.panasonic.com           |
| SANYOSemiconductor (U.S.A.) Corp.      | 201-825-8080 | http://semicon.us.sanyo.com |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |
| Vishay                                 | 402-563-6866 | www.vishay.com              |

Note: Indicate that you are using the MAX16913/MAX16913A when contacting these component suppliers.

## Quick Start

## Recommended Equipment

Before beginning, the following equipment is needed:

- 18V power supply
- Load
- Voltmeter

## Detailed Description of Hardware

The MAX16913A evaluation kit (EV kit) evaluates the MAX16913A high-voltage, high-side current-sense switches. The EV kit operates from a DC supply voltage from 5V to 18V. The EV kit demonstrates the device's open-drain fault signals ( OL and SC ), open-load threshold setting input (OLT), and shutdown function (SHDN).

The MAX16913A EV kit provides LED1 and LED2 to facilitate the monitoring of the open-load and short-circuit  open-drain fault signals, respectively. The openload threshold setting input is configurable for two possible settings using jumper JU2.

An on-board LDO (U2) is provided to support singlesupply evaluation. The LDO is powered by the input supply voltage (VIN) and provides a 5V output (LDO), used to source the on-board indicator LEDs.

The EV kit can also be used to evaluate the MAX16913, which features an internally set open-load threshold. See the Evaluating the MAX16913 section.

## Shutdown (JU1)

The MAX16913A EV kit provides jumper JU1 to configure the devices shutdown pin (SHDN). See Table 1.

## Table 1. Jumper JU1 Functions

| SHUNT POSITION   | SHDN PIN                         | DESCRIPTION     |
|------------------|----------------------------------|-----------------|
| Installed*       | Connected to GND                 | Device enabled  |
| Not installed    | Connected to LDO (5V) through R2 | Device disabled |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX16913A Evaluation Kit

Table 2. Jumper JU2 Functions

| SHUNT POSITION   |   OPEN-LOAD THRESHOLD (mA) |
|------------------|----------------------------|
| 1-2              |                         10 |
| 2-3*             |                         15 |

*Default position.

## Table 3. Jumper JU4 Function

| SHUNT POSITION   | DESCRIPTION                                                                            |
|------------------|----------------------------------------------------------------------------------------|
| Installed*       | Indicator LEDs (LED1 and LED2) used to monitor fault signals                           |
| Not installed    | Indicator LEDs (LED1 and LED2) not used. OL and SC pads used to monitor fault signals. |

*Default position.

## Table 4. Jumper JU3 Function (2-Pin Header Not Installed)

| SHUNT POSITION   | OLT PIN                       | DESCRIPTION                                 |
|------------------|-------------------------------|---------------------------------------------|
| Installed        | Connected to GND              | EV kit configured to evaluate the MAX16913  |
| Not installed    | Connected to resistor-divider | EV kit configured to evaluate the MAX16913A |

<!-- image -->

## Open-Load Threshold (JU2)

The open-load threshold setting is configured by the resistor-divider between the REF and OLT device pins. The MAX16913A EV kit provides for two threshold settings that are selected by configuring jumper JU2. See Table 2.

## Open-Drain Fault Signals ( OL , SC )

The MAX16913A EV kit includes LED1 and LED2 to provide visual monitoring of the open-load and shortcircuit fault signals. LED1 monitors the open-load ( OL ) signal and LED2 monitors the short-circuit ( SC )  signal. Both LED networks are driven by the on-board LDO voltage (5V). To monitor the indicator outputs by external means, remove the shunt from jumper JU4 and connect the monitoring system to the OL and SC pads. Ensure that the monitoring system provides pullup resistors  on  the  open-drain  indicator  output  pins, OL and SC . See Table 3.

## Evaluating the MAX16913

The MAX16913A EV kit can also be used to evaluate the MAX16913 device. The open-load threshold for the MAX16913 device is internally set. As such, when evaluating the MAX16913 device the OLT resistor-divider network is not needed and jumper JU3 should be installed and configured with a shunt. See Table 4.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX16913A Evaluation Kit

Figure 1. MAX16913A EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX16913A Evaluation Kit

<!-- image -->

Figure 2. MAX16913A EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 3. MAX16913A EV Kit PCB Layout-Component Side

Figure 4. MAX16913A EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

5