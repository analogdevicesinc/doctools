<!-- lastmod 2022-08-02 -->
<!-- image -->

## General Description

The MAX15026B evaluation kit (EV kit) is a fully assembled and tested PCB that contains all the components necessary  to  evaluate  the  performance  of  the MAX15026B 10A synchronous step-down controller.

The MAX15026B EV kit requires a 5V to 16V power supply that provides up to 4A for normal operation. The MAX15026B EV kit output is configured to 1.5V and delivers up to 10A output current. The controller switching  frequency  is  programmed  to  600kHz.  The MAX15026B EV kit includes PCB pads to enable the circuit and to monitor the power-good output.

| DESIGNATION   |   QTY | DESCRIPTION                                                                  |
|---------------|-------|------------------------------------------------------------------------------|
| C1            |     1 | 330µF ±20%, 25V electrolytic capacitor (10mm x 10.2mm) Panasonic EEEFC1E331P |
| C2            |     1 | 4.7µF ±10%, 25V X5R ceramic capacitor (0805) Murata GRM21BR61E475K           |
| C3            |     1 | 1µF ±10%, 25V X5R ceramic capacitor (0603) Murata GRM188R61E105K             |
| C4            |     1 | 4.7µF ±10%, 6.3V X5R ceramic capacitor (0603) Murata GRM188R60J475K          |
| C5            |     1 | 2.2µF ±10%, 6.3V X5R ceramic capacitor (0603) Murata GRM188R60J225K          |
| C6            |     1 | 10µF ±10%, 25V X5R ceramic capacitor (1206) Murata GRM31CR61E106K            |
| C7            |     0 | Not installed, ceramic capacitor (1206)                                      |
| C8            |     1 | 0.47µF ±10%, 16V X7R ceramic capacitor (0603) Murata GRM188R71C474K          |
| C9            |     1 | 2700pF ±5%, 50V C0G ceramic capacitor (0805) Murata GRM2165C1H272JA          |
| C10           |     1 | 470µF ±20%, 4V electrolytic capacitor (8mm x 10.5mm) SANYO 4CE470EX          |
| C11, C12      |     2 | 22µF ±10%, 6.3V X5R ceramic capacitors (1206) Murata GRM31CR60J226K          |

Features

- ♦ 5V to 16V Input Range
- ♦ Optional 4.5V to 5.5V Input Range for MAX15026B IC
- ♦ 1.5V at 10A Output
- ♦ 600kHz Switching Frequency
- ♦ Enable Input
- ♦ Power-Good Output
- ♦ Fully Assembled and Tested

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX15026BEVKIT+ | EV Kit |

+Denotes lead-free and RoHS compliant.

## Component List

| DESIGNATION         |   QTY | DESCRIPTION                                                         |
|---------------------|-------|---------------------------------------------------------------------|
| C13                 |     1 | 68pF ±5%, 50V C0G ceramic capacitor (0603) Murata GRM1885C1H680J    |
| C14                 |     1 | 15pF ±5%, 50V C0G ceramic capacitor (0603) Murata GRM1885CH150J     |
| C15                 |     1 | 1500pF ±10%, 50V C0G ceramic capacitor (0603) Murata GRM1885C1H152K |
| C16                 |     1 | 2200pF ±5%, 50V C0G ceramic capacitor (0603) Murata GRM1885C1H222J  |
| C17                 |     0 | Not installed, ceramic capacitor (0603)                             |
| JU1                 |     1 | 3-pin header                                                        |
| JU2                 |     1 | 2-pin header                                                        |
| L1                  |     1 | 1.4µH, 22A inductor Coilcraft MSS1278-142ML                         |
| N1                  |     1 | 30V, 74A n-channel MOSFET (SO-8FL) ONSemiconductor NTMFS4837NT1G    |
| N2                  |     1 | 30V, 104A n-channel MOSFET(SO-8FL) ONSemiconductor NTMFS4835NT1G    |
| PGND (2), VIN, VOUT |     4 | Uninsulated banana jacks                                            |
| TP1, TP2            |     2 | PC mini red test points                                             |
| R1, R6, R8          |     0 | Not installed, resistors (0603)                                     |
| R2                  |     1 | 200k ±1% resistor (0603)                                            |
| R3                  |     1 | 10 ±5% resistor (0603)                                              |
| R4                  |     1 | 51k ±5% resistor (0603)                                             |

1

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX15026B Evaluation Kit

## Component List (continued)

*EP = Exposed pad.

| DESIGNATION   |   QTY | DESCRIPTION               |
|---------------|-------|---------------------------|
| R5            |     1 | 2.2 ±5% resistor (0603)   |
| R7            |     1 | 1 ±1% resistor (1210)     |
| R9            |     1 | 11.8k ±1% resistor (0603) |
| R10           |     1 | 22.6k ±1% resistor (0603) |
| R11           |     1 | 5.9k ±1% resistor (0603   |
| R12           |     1 | 15.4k ±1% resistor (0603) |
| R13           |     1 | 10k ±1% resistor (0603)   |
| R14           |     1 | 27k ±1% resistor (0603)   |

| DESIGNATION   |   QTY | DESCRIPTION                                                                             |
|---------------|-------|-----------------------------------------------------------------------------------------|
| R15           |     1 | 49.9 ±1% resistor (0805)                                                                |
| U1            |     1 | 10A synchronous step-down controller (14 TDFN-EP*) Maxim MAX15026BETD+ (Top Mark: +ADP) |
| -             |     2 | Shunts (JU1, JU2)                                                                       |
| -             |     1 | PCB: MAX15026B Evaluation Kit+                                                          |

## Procedure

The MAX15026B EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all

connections are completed.

- 1) Install  a  shunt  across  pins  1-2  of  jumper  JU1  (VIN input source for U1).
- 2) Install a shunt at jumper JU2 (VOUT enabled).
- 3) Connect a voltmeter to the VOUT and PGND pads.
- 4) Connect a voltmeter to the PGOOD and AGND pads.
- 5) Connect a 10A electronic load to the VOUT and PGND banana jack connectors.
- 6) Connect a DC power supply to the VIN and PGND banana jack connectors and set the voltage to 12V.
- 7) Enable the power supply.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Coilcraft, Inc.                        | 847-639-6400 | www.coilcraft.com           |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| ONSemiconductor                        | 602-244-6600 | www.onsemi.com              |
| Panasonic Corp.                        | 800-344-2112 | www.panasonic.com           |
| SANYO Electric Co., Ltd.               | 619-661-6835 | www.sanyodevice.com         |

Note: Indicate that you are using the MAX15026B when contacting these component suppliers.

## Quick Start

## Required Equipment

Before beginning, the following equipment is needed:

- MAX15026B EV kit
- Adjustable 5V to 16V, 4A DC power supply
- Electronic load capable of sinking 10A (e.g., HP6060B)
- Two voltmeters
- 8) Enable the electronic load and set it to 10A.
- 9) Verify that the voltmeters at VOUT and PGOOD are 1.5V and approx 5.2V, respectively.

## Detailed Description of Hardware

The MAX15026B EV kit is a fully assembled and tested PCB that contains all the components necessary to evaluate the performance of the MAX15026B 10A synchronous step-down controller. The circuit uses a MAX15026B step-down controller IC to implement a step-down synchronous DC-DC converter circuit. The MAX15026B EV kit is designed to operate from a single DC power supply that provides 5V to 16V and 4A of current. The MAX15026B controller can also be operated using a separate 4.5V to 5.5V power source applied at the VCC and AGND PCB pads. When operating the MAX15026B EV kit using separate power-supply sources at the VIN connector and VCC PCB pad, apply power at the VIN and PGND connectors first and then the VCC and AGND PCB pads.

The MAX15026B EV kit converter is configured to 1.5V and provides up to 10A output current. The switching frequency is set to 600kHz using resistor R14. The EV kit features PCB pads to evaluate the enable input signal (EN) and to monitor the power-good (PGOOD) and VCC output signals.

<!-- image -->

## MAX15026B Evaluation Kit

## Converter Input Source

Banana jack connectors VIN and PGND are used as the power source for the converter. The MAX15026B EV kit converter output performance is optimized over the  5V  to  16V  VIN  input  voltage  range  and  up  to  10A output current. The MAX15026B EV kit can operate above the 16V maximum input-voltage range and at higher output currents; however, performance may be degraded due to the limitation of the components used in the circuit.

## MAX15026B IC Bias Input (JU1)

The MAX15026B EV kit features an option to select the bias input for the MAX15026B IC controller when configuring the EV kit to operate with an input source less than 6V. Jumper JU1 selects the input-voltage source for the MAX15026B IC controller. Place a shunt across pins 1-2 to power the MAX15026B IC using the power source applied at the VIN and PGND banana jack connectors. Place a shunt across pins 2-3 to power the MAX15026B IC input using the power source applied at the VCC and AGND PCB pads. Note that the power source applied to the VCC PCB pad has a 4.5V to 5.5V input-voltage range. When operating the MAX15026B EV kit using separate power-supply sources at the VIN connector and VCC PCB pad, apply power at the VIN and PGND connectors first and then the VCC and AGND PCB pads.

## Table 1. MAX15026B Bias Input Configuration (JU1)

| SHUNT POSITION   | MAX15026B IN PIN   | MAX15026B IC INPUT RANGE (V)   |
|------------------|--------------------|--------------------------------|
| 1-2              | Connected to VIN   | 5 to 16                        |
| 2-3              | Connected to VCC   | 4.5 to 5.5                     |

## Configuring the Output Voltage (VOUT)

VOUT voltage can be reconfigured between 0.6V to 0.85 x VIN. To configure the EV kit's output voltage, refer  to  the Setting  the  Output  Voltage section in the MAX15026 IC data sheet for instructions on selecting new resistor values.

Capacitors C13-C16 and resistors R10 and R11 provide  a  compensation  network  for  VOUT  on  the MAX15026B EV kit.

Refer to the Inductor Selection, Input Capacitor Selection, and the Compensation sections in the MAX15026 IC data sheet to verify whether other components need replacement for proper operation after reconfiguring the output voltage.

<!-- image -->

## Current-Limit Thresholds

The MAX15026B IC employs a current-sensing algorithm  using  the  on-resistance  of  the  low-side  MOSFET as a current-sensing element to limit the inductor current. The inductor current is sensed in the converter by sensing the voltage drop across the on-resistance RDSON of the low-side MOSFET (N2). The MAX15026B EV kit's valley and sink current limits are set to approximattely 16.5A and 8A, respectively.

Resistor R9 sets VOUT valley current-limit voltage thresholds (VITH) to 59mV. The sink current-limit voltage threshold is approximately half the valley current-limit voltage threshold. Use the following equation to reconfigure the valley current-limit voltage threshold:

<!-- formula-not-decoded -->

where VITH is the valley current-limit voltage threshold in volts and RLIM\_ is R9 in ohms.

Refer to the Current Limit Circuit (LIM) and Setting the Valley Current Limit sections in the MAX15026 IC data sheet  for  further  instructions  on  computing  the MAX15026B EV kit valley and sink current limits.

A PCB pad for resistor R8 is provided to implement foldback current-limit capabilities, if required.

## Switching Frequency

The MAX15026B controller switching frequency is set to 600kHz by resistor R14. Replace resistor R14 with a new resistor value to program the switching frequency between 200kHz and 2MHz. Use the following equation to calculate R14 when reconfiguring the switching frequency:

<!-- formula-not-decoded -->

where fSW is in hertz and R14 is in ohms.

When reconfiguring the EV kit controller switching frequency, it may be necessary to change the compensation  network component to new values. Refer to the Compensation section in the MAX15026 IC data sheet for computing new compensation component values.

## Power-Good Output (PGOOD)

The MAX15026B EV kit provides a PCB pad to monitor the status of the power-good output. PGOOD is high when VOUT rises 94.5% (typ) above its programmed output voltage. When VOUT falls below 92% (typ) of its nominal regulated voltage, PGOOD is pulled low.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX15026B Evaluation Kit

## Enable Control (JU2)

Jumper JU2 configures the MAX15026B EV kit's output for turn-on/turn-off control. Install a shunt across jumper JU2 to enable VOUT. VOUT is disabled or can also be externally controlled by placing an independent voltage source at the EN and AGND PCB pad when a shunt is not installed at jumper JU2. An additional PCB resistor pad (R1) is included to set the output to a desired turnon voltage.

## Table 2. Enable Control (JU2)

| SHUNT POSITION   | EN PIN                         | VOUT OUTPUT                                      |
|------------------|--------------------------------|--------------------------------------------------|
| Installed        | Connected to VCC               | Enabled                                          |
| Not installed    | Pulled down to AGND through R2 | Disabled or voltage source applied at EN PCB pad |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX15026B Evaluation Kit

Figure 1. MAX15026B EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX15026B Evaluation Kit

Figure 2. MAX15026B EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX15026B Evaluation Kit

<!-- image -->

Figure 3. MAX15026B EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX15026B Evaluation Kit

Figure 4. MAX15026B EV Kit PCB Layout-Power Layer 2

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX15026B Evaluation Kit

Figure 5. MAX15026B EV Kit PCB Layout-GND Layer 3

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX15026B Evaluation Kit

Figure 6. MAX15026B EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

10

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_