<!-- lastmod 2022-08-02 -->
<!-- image -->

## General Description

The MAX17020 evaluation kit (EV kit) demonstrates the MAX17020's standard application circuit. This dual Quick-PWM ™ synchronous DC-DC converter steps down high-voltage batteries and/or AC adapters, generating main supplies for notebook computers. The MAX17020 EV kit provides dual 1.5V (VOUT1) and 1.05V (VOUT2) output voltages from a 6V to 24V batteryinput range. It delivers at least 6A output current for the 1.5V output, and 10A for the 1.05V output. Both outputs are adjustable between 0.7V and 5.5V. An external unregulated charge pump generates an 8V (VSEC) auxiliary  voltage  capable of delivering 2mA from the 1.5V output.

The MAX17020 also has an internal fixed 5V lowdropout (LDO) linear regulator capable of supplying 100mA, and an always-on 3.3V, 5mA real-time clock (RTC) supply.

The MAX17020 EV kit operates at 400kHz/300kHz switching frequency (1.5V/1.05V, respectively) and has superior line- and load-transient response.

For 5V and 3.3V output evaluation, the MAX8778 EV kit can be used. The MAX17020 is a pin-for-pin replacement of the MAX8778.

| DESIGNATION                       |   QTY | DESCRIPTION                                                                                               |
|-----------------------------------|-------|-----------------------------------------------------------------------------------------------------------|
| BYP, GATE, PGOOD1, PGOOD2, REFIN2 |     0 | Not installed, test points                                                                                |
| C2-C5                             |     4 | 10µF ± 20%, 25V X5R ceramic capacitors (1210) TDK C3225X7R1E106M AVX 12103D106M Taiyo Yuden TMK325BJ106MM |
| C6, C13, C18, C21, C23            |     5 | 1µF ± 20%, 10V X5R ceramic capacitors (0603) TDK C1608X5R1A105M Murata GRM188R61A105M AVX 0603ZD105MAT    |
| C7                                |     0 | Not installed, capacitor (D case)                                                                         |
| C8                                |     1 | 330µF, 2.5V, 9m Ω low-ESR capacitor (D case) SANYO 2R5TPE330M9                                            |
| C9, C10, C14-C17, C20, C22        |     8 | 0.1µF ± 10%, 25V X7R ceramic capacitors (0603) Murata GRM188R71E104K TDK C1608X7R1E104K                   |

Quick-PWM is a trademark of Maxim Integrated Products, Inc.

Features

- ♦ 6V to 24V Input Range
- ♦ 3.3V, 5mA RTC Power (Always On)
- ♦ Internal 5V, 100mA Linear Regulator (Adjustable from 0.6V to 4V)
- ♦ Output Voltages:
- 1.05V at 10AMIN (VOUT2, Dynamic Adjustable from 0 to 2V) or Preset 3.3V
- 1.5V at 6AMIN (VOUT1, Adjustable from 0.7V to 5.5V) 8VMIN at 2mA (Charge-Pump Output)
- ♦ Dynamic 0 to 2V REFIN2 Input on Second Output
- ♦ 400kHz/300kHz Switching Frequency (1.5V/1.05V, Respectively)
- ♦ Power-Good (PGOOD1 and PGOOD2) Indicators
- ♦ Secondary Feedback Input Maintains Charge Pump
- ♦ 32-Pin, 5mm x 5mm Thin QFN Package
- ♦ Fully Assembled and Tested

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX17020EVKIT+ | EV Kit |

+Denotes lead-free and RoHS compliant.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                          |
|---------------|-------|----------------------------------------------------------------------------------------------------------------------|
| C11, C12      |     2 | 470µF, 2.5V, 7m Ω low-ESR capacitors (D case) SANYO 2R5TPF470M7L                                                     |
| C19           |     1 | 4.7µF ± 10%, 6.3V X5R ceramic capacitor (0805) TDK C2012X5R0J475K or Taiyo Yuden JMK212BJ475KG                       |
| D1, D2        |     2 | 100V, 200mA, dual diodes (SOT23) Fairchild MMBD4148SE (Top Mark: D4) Central Semi CMPD7000 Lead Free (Top Mark: C5C) |
| D3, D4        |     2 | Green LEDs, clear SMD (0805)                                                                                         |
| JU1, JU2      |     2 | 3-pin headers                                                                                                        |
| L1            |     1 | 2.2µH, 12A, 5.2m Ω inductor Cooper Bussmann HC7-2R2-R 2.2µH, 12.5A, 5.4m Ω inductor Sumida CEP125NP-2R2MC            |
| L2            |     1 | 1µH, 20A, 1.6m Ω inductor Cooper Bussmann HC7-1R0-R 1µH, 16.5A, 2.5m Ω inductor Sumida CEP125NP-1R0MC                |

## MAX17020 Evaluation Kit

## Component List (continued)

*EP = Exposed pad.

| DESIGNATION                     |   QTY | DESCRIPTION                                                                             |
|---------------------------------|-------|-----------------------------------------------------------------------------------------|
| N1, N3                          |     2 | N-channel MOSFETs (PowerPAK SO-8) Fairchild FDS6298 (SO-8) Vishay/Siliconix Si7634DP    |
| N2, N4                          |     2 | N-channel MOSFETs (PowerPAK SO-8) Fairchild FDS8670 (SO-8) Vishay/Siliconix Si7336ADP   |
| Q1                              |     1 | N-channel MOSFET (SOT23) Fairchild 2N7002 (Top Mark: 702) Zetex ZVN3306F (Top Mark: MC) |
| R1, R8, R12, R16, R20, R28, R29 |     7 | 0 Ω resistors (0603)                                                                    |
| R2, R3                          |     2 | 4.7 Ω ± 5% resistors (0603)                                                             |
| R4, R5                          |     2 | 1k Ω ± 5% resistors (0603)                                                              |
| R6                              |     1 | 590k Ω ± 1% resistor (0603)                                                             |
| R7                              |     1 | 200k Ω ± 1% resistor (0603)                                                             |

| DESIGNATION                                     |   QTY | DESCRIPTION                                                                      |
|-------------------------------------------------|-------|----------------------------------------------------------------------------------|
| R9, R10, R11, R13, R14, R15, R18, R19, R27, R31 |     0 | Not installed, resistors (0603)                                                  |
| R17                                             |     1 | 10 Ω ± 5% resistor (0603)                                                        |
| R21                                             |     1 | 80.6k Ω ± 1% resistor (0603)                                                     |
| R22-R25, R30                                    |     5 | 100k Ω ± 5% resistors (0603)                                                     |
| R26                                             |     1 | 140k Ω ± 1% resistor (0603)                                                      |
| SW1                                             |     1 | 4-position, low-profile DIP switch                                               |
| U1                                              |     1 | Dual synchronous DC-DC converter (32-pin TQFN-EP*, 5mm x 5mm) Maxim MAX17020ETJ+ |
| -                                               |     1 | PCB: MAX17020 Evaluation Kit+                                                    |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| AVX Corporation                        | 843-946-0238 | www.avxcorp.com             |
| Central Semiconductor Corp.            | 631-435-1110 | www.centralsemi.com         |
| Cooper Bussmann                        | 916-941-1117 | www.fairchildsemi.com       |
| Fairchild Semiconductor                | 888-522-5372 | www.cooperet.com            |
| IRC, Inc.                              | 361-992-7900 | www.irctt.com               |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| SANYO North America Corp.              | 619-661-6835 | www.sanyodevice.com         |
| Sumida Corp.                           | 847-545-6700 | www.sumida.com              |
| Taiyo Yuden                            | 800-348-2496 | www.t-yuden.com             |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |
| Vishay                                 | 402-563-6866 | www.vishay.com              |
| Zetex Semiconductors                   | 631-360-2222 | www.zetex.com               |

Note:

Indicate that you are using the MAX17020 when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17020 Evaluation Kit

## Quick Start

## Recommended Equipment

Refer to the MAX17020 IC data sheet for selection of output capacitor and inductor values for different output voltages.

Before beginning, the following equipment is needed:

- MAX17020 EV kit
- One 6V to 24V, 100W DC power supply
- Two dummy loads capable of sinking 10A or greater
- Three voltmeters

## 1.05V Output-Voltage Setting (VOUT2)

The MAX17020 provides a fixed 1.05V output (VOUT2) when REFIN2 is connected to RTC (R12 = 0 Ω ,  R11  = open), or a fixed 3.3V output when REFIN2 is connected to VCC (R11 = 0).

VOUT2 can also be adjusted from 0 to 2V using a resistive voltage-divider formed by R13 and R15. REFIN2 sets the feedback-regulation voltage (VOUT2 = V REFIN2).

To change the output voltage to a value between 0 and 2V, set R15 equal to 49.9k Ω ± 1%. Calculate R13 using the equation:

<!-- formula-not-decoded -->

where VREF = 2V.

By changing the voltage at REFIN2, the MAX17020 can be used in applications that require multiple dynamicoutput voltages. Control FET Q1 changes the voltage at REFIN2 by switching resistors in and out of the resistor network. An external signal at GATE can control Q1 and the voltage at REFIN2.

Refer to the MAX17020 IC data sheet for selection of output capacitor and inductor values for different output voltages.

## LDO Voltage Setting (LDO)

The MAX17020 provides a fixed 5V, 100mA output linear regulator (LDO) when LDOREFIN is connected to GND (R20 = 0 Ω , R18/R19 = open), or a fixed 3.3V linear output when LDOREFIN is connected to VDD (R19 = 0 Ω , R18/R20 = open).

LDO voltage can also be adjusted from 0.6V to 4V. LDOREFIN sets the LDO regulation voltage (VLDO = 2 x VLDOREFIN) for a 0.3V to 2V LDOREFIN range.

<!-- formula-not-decoded -->

where VREF = 2V.

## 8V Output-Voltage Setting (VSEC)

An external unregulated charge pump is connected to VOUT1 and generates an 8VMIN (VSEC) auxiliary voltage capable of delivering 2mA from the 1.5V output. When the SECFB voltage drops below its 2V feedback threshold, the MAX17020 issues an ultrasonic pulse. This forces a switching cycle, allowing the external unregulated charge pump to be refreshed. Refer to the Ultrasonic Mode ( SKIP = Open or REF) section in the MAX17020 IC data sheet for more information.

## Procedure

The MAX17020 EV kit is a fully assembled and tested surface-mount PCB. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Verify that there is no shunt across JU1.
- 2) Verify that there is a shunt across JU2, pins 1-2.
- 3) Verify  that  all  SW1  settings  are  in  the  open  positions.
- 4) Connect a voltmeter across the VOUT1 and GND pads.
- 5) Connect a voltmeter across the VOUT2 and GND pads.
- 6) Connect a voltmeter across the VSEC and GND pads.
- 7) Turn on the power supply.
- 8) Verify  that  the  output  voltages  are  VOUT1  =  1.5V, VOUT2 = 1.05V and VSEC = 8V.

## Detailed Description of Hardware

## 1.5V Output-Voltage Setting (VOUT1)

The MAX17020 provides a fixed 1.5V output (VOUT1) when FB1 is connected to VCC (R8 = 0 Ω ,  R9/R10 = open) or a fixed 5V output when FB1 is connected to GND (R10 = 0, R9 = open).

VOUT1 can also be adjusted from 0.7V to 5.5V using a resistive  voltage-divider formed by R9 and R10. The MAX17020 regulates FB1 to a fixed reference voltage (0.7V).

The adjusted output voltage is:

<!-- formula-not-decoded -->

where VFB1 = 0.7V.

To change the output voltage to a value between 0.7V and 5.5V, set R10 equal to 49.9k Ω ± 1%. Calculate R9 using the equation:

<!-- formula-not-decoded -->

where VFB1 = 0.7V.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17020 Evaluation Kit

To change the VSEC refresh voltage, set R7 = 200k Ω ± 1%. Calculate R6 using the equation:

<!-- formula-not-decoded -->

where VSECFB = 2V.

To disable the secondary feedback, connect SECFB to VDD by installing R31 with a 200k Ω resistor.  Uninstall the secondary feedback resistors R6 and R7.

## Table 1. Jumper JU1 Functions (Switching-Frequency Selection)

| SHUNT POSITION   | TON PIN          | FREQUENCY V OUT1 /V OUT2 (kHz)   |
|------------------|------------------|----------------------------------|
| 1-2              | Connected to VDD | 200/300                          |
| 2-3              | Connected to GND | 400/500                          |
| Not installed*   | Pulled to REF    | 400/300 (as shipped)             |

## Table 3. Switch SW1 Settings

| SWITCH SETTINGS   | SWITCH SETTINGS   | PIN CONTROL                                | MAX17020 OPERATION                                                                                                                         |
|-------------------|-------------------|--------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------|
| SW1-A             | Off (Open)        | Control FET Q1 is on Control FET Q1 is off | Resistor R14 is switched in and out of the resistor network changing REFIN2 voltage. ( Note: R14 is not populated in the default circuit.) |
| SW1-A             | On (Short)        | Control FET Q1 is on Control FET Q1 is off | Resistor R14 is switched in and out of the resistor network changing REFIN2 voltage. ( Note: R14 is not populated in the default circuit.) |
| SW1-B             | Off (Open)        | ON1 pin is connected to VDD                | Enables SMPS1, V OUT1 = 1.5V; VSEC = 8V                                                                                                    |
| SW1-B             | On (Short)        | ON1 pin is connected to GND                | Disables SMPS1, V OUT1 = 0V; VSEC = 0V                                                                                                     |
| SW1 - C           | Off (Open)        | ON2 pin is connected to VDD                | Enables SMPS2, V OUT2 = 1.05V                                                                                                              |
| SW1 - C           | On (Short)        | ON2 pin is connected to GND                | Disables SMPS2, V OUT2 = 0V                                                                                                                |
| SW1-D             | Off (Open)        | ONLDOpin is connected to VIN               | Enables LDO output, VLDO = 5V                                                                                                              |
| SW1-D             | On (Short)        | ONLDOpin is connected to GND               | Disables LDO output, VLDO = 0V                                                                                                             |

Note:

As configured, the MAX17020 EV kit is shipped with all SW1 settings in the off positions.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Jumper and Switch Settings

The switching frequency of the MAX17020 is adjusted by  changing  jumper  JU1.  As  configured,  the MAX17020 EV kit operates at 400kHz/300kHz. When changing the  switching  frequency,  refer  to  the MAX17020 IC data sheet for the proper component selection and calculations for the MOSFETs, inductors, and output capacitors.

## Table 2. Jumper JU2 Functions (Operating-Mode Selection)

| SHUNT POSITION   | SKIP PIN         | OPERATING MODE                                                      |
|------------------|------------------|---------------------------------------------------------------------|
| 1-2*             | Connected to VDD | Low-noise, forced fixed- frequency PWM operation                    |
| 2-3              | Connected to GND | Automatic, high-efficiency, pulse-skipping operation at light loads |
| Not installed    | Floating         | Ultrasonic mode                                                     |

<!-- image -->

## MAX17020 Evaluation Kit

<!-- image -->

Figure 1. MAX17020 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17020 Evaluation Kit

Figure 2. MAX17020 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 3. MAX17020 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX17020 Evaluation Kit

Figure 4. MAX17020 EV Kit PCB Layout-Layer 2 (PGND Plane)

<!-- image -->

<!-- image -->

Figure 5. MAX17020 EV Kit PCB Layout-Layer 3 (PGND/Signal Layer)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Evaluates:  MAX17020

## MAX17020 Evaluation Kit

Figure 6. MAX17020 EV Kit PCB Layout-Solder Side

<!-- image -->

Figure 7. MAX17020 EV Kit Component Placement GuideSolder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->