<!-- lastmod 2022-08-02 -->
## General Description

The MAX8554 evaluation kit (EV kit) is a fully assembled and tested circuit using the MAX8554 step-down controller. The EV kit comes with the MAX8554 installed and provides a 2.5V output at up to 20A using an input supply between 10.8V and 13.2V and an operating frequency of 200kHz. The same circuit board can also be used to evaluate the MAX8553 tracking step-down controller. To evaluate the MAX8553, order a free sample of the MAX8553EEE along with this EV kit.

| DESIGNATION   |   QTY | DESCRIPTION                                                                                |
|---------------|-------|--------------------------------------------------------------------------------------------|
| C1            |     1 | 0.47µF ±10%, 10V X7R ceramic capacitor (0603) TDK C1608X7R1A474K                           |
| C2            |     1 | 4.7µF ±10%, 6.3V X5R ceramic capacitor (0603) Panasonic ECJ1VB0J475K TDK C1608X5R0J475K    |
| C3            |     1 | 4700pF ±10%, 25V X7R ceramic capacitor (0402) TDK C1005X7R1E472K Taiyo Yuden TMK105BJ472KV |
| C4            |     1 | 10µF ±20%, 6.3V X5R ceramic capacitor (0805) TDK C2012X5R0J106M Taiyo Yuden JMK212BJ106MG  |
| C5, C6, C7    |     3 | 470µF ±20%, 4V, ESR = 10m Ω POSCAPs Sanyo 4TPD470M                                         |
| C8            |     0 | Not installed-POSCAP                                                                       |
| C9-C12        |     0 | Not installed (E) Sanyo OSCON 4SP560M Through-hole overlay on C5-C8                        |
| C13           |     1 | 10µF ±20%, 16V X7R ceramic capacitor (1210) TDK C3225X7R1C106M                             |

- ♦ Up to 20A Output-Current Capability
- ♦ 10.8V to 13.2V Input Voltage Range
- ♦ Quick-PWM™ Control for Fast Loop Response
- ♦ Up to 92% Efficiency
- ♦ No External Bias Supply Required
- ♦ Foldback Current Limit
- ♦ Overvoltage Protection
- ♦ Fully Assembled and Tested

Quick-PWM is a trademark of Maxim Integrated Products, Inc.

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE   |
|--------------|--------------|--------------|
| MAX8554EVKIT | 0°C to +70°C | 16 QSOP      |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                    |
|---------------|-------|------------------------------------------------------------------------------------------------|
| C14, C15, C16 |     0 | Not installed-POSCAPs surface-mount overlay on C14, C15, C16                                   |
| C17, C20, C21 |     3 | 680µF ±20%, 16V aluminum electrolytic capacitors (F) Sanyo 16MV680WX Rubycon 16MBZ680M10x12.5  |
| C18           |     1 | 0.22µF ±10%, 10V X7R/X5R ceramic capacitor (0603) Taiyo Yuden LMK107BJ224KA TDK C1608X5R1A224K |
| C19           |     1 | 1µF ±10%, 16V X5R ceramic capacitor (0603) TDK C1608X5R1C105K                                  |
| C22, C23      |     0 | Not installed (0603)                                                                           |
| C24           |     0 | Not installed (0805)                                                                           |
| C25           |     0 | Not installed (0402)                                                                           |
| D1            |     1 | Schottky diode (SOT23) Central CMPSH-3                                                         |
| JU1, JU2      |     2 | 3-pin headers                                                                                  |
| JU3           |     1 | 4-pin, 3-position header                                                                       |
| JU4           |     0 | Not installed Cut here-open                                                                    |
| L1            |     1 | 1.5µH inductor BI Technologies HM73301R5                                                       |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

<!-- image -->

## Features

## MAX8554 Evaluation Kit

| DESIGNATION   |   QTY | DESCRIPTION                              |
|---------------|-------|------------------------------------------|
| N1            |     1 | N-channel MOSFET (8-pin SO) IRF IRF7832  |
| N2, N3        |     2 | N-channel MOSFETs (8-pin SO) IRF IRF7832 |
| Q1            |     0 | Not installed (SOT23)                    |
| R1            |     1 | 1 Ω ±5% resistor (1206)                  |
| R2            |     1 | 19.1k Ω ±1% resistor (0603)              |
| R3            |     1 | 6.04k Ω ±1% resistor (0603)              |
| R4            |     1 | 20k Ω ±5% resistor (0603)                |

## Quick Start

## Recommended Equipment

- Power supply capable of supplying 10.8V to 13.2V at 6A
- Load (up to 20A)
- Voltmeter

## Procedure

The MAX8554 evaluation kit is fully assembled and tested. Follow these steps to verify board operation:

- 1) Preset the power supply to between 10.8V and 13.2V. Turn off the power supply. Do not turn on the power supply until all connections are completed .
- 2) Connect the positive power-supply lead to the EV kit terminal labeled IN.
- 3) Connect the negative power-supply lead to the EV kit terminal labeled PGND (located next to IN at the top of the EV kit board).
- 4) Connect the positive voltmeter lead to the EV kit terminal labeled OUT.
- 5) Connect the voltmeter ground to the EV kit terminal labeled PGND (located next to OUT on the right side of the EV kit board).
- 6) Connect a load (up to 20A) from OUT to PGND.
- 7) Verify that jumpers JU1 and JU2 both have pins 2-3 shorted.
- 8) Verify that jumper JU3 has pins 1-3 shorted.
- 9) Turn on the power supply.
- 10) Using the voltmeter, verify that the output voltage is 2.5V.

## Component List (continued)

| DESIGNATION     |   QTY | DESCRIPTION                           |
|-----------------|-------|---------------------------------------|
| R5              |     1 | 25.5k Ω ±1% resistor (0603)           |
| R6              |     1 | 110k Ω ±1% resistor (0603)            |
| R7, R8, R10-R13 |     6 | 0 Ω resistors (0603)                  |
| R9, R15         |     0 | Not installed (0603)                  |
| R14             |     0 | Not installed (2512) (PC board short) |
| R16             |     0 | Not installed (1206)                  |
| U1              |     1 | MAX8554EEE (16-pin QSOP)              |
| None            |     1 | Shunt, 2 position                     |
| None            |     1 | MAX8554 EV kit PC board               |

## Detailed Description

## V+ Selection

V+ is the input to the VL linear regulator that provides power to supply the IC. Normally V+ is connected to IN (JU1 has pins 2-3 shorted). To use a separate supply between 6V and 28V to power the IC, short pins 1-2 of JU1 and connect the V+ supply to the EV kit pad labeled V+ (see Table 1).

## Enable/Shutdown

Shutdown mode turns off the IC, reducing the input current to below 10µA. For the MAX8554, JU2 controls the shutdown feature (see Table 2). Short pins 1-2 of JU2 to shut down the IC, or short pins 2-3 to enable the IC. To control shutdown with an external logic signal, remove

## Table 1. JU1-V+ Input Selection

| JU1 POSITION   | FUNCTION                                            |
|----------------|-----------------------------------------------------|
| 1-2            | Connect a separate supply (6V to 28V) to the V+ pad |
| 2-3 *          | V+ is connected to IN                               |

## Table 2. JU2-Enable/Shutdown

| JU2 POSITION   | FUNCTION                                                                                                                                                                                          |
|----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1-2            | Shutdown (MAX8554 only)                                                                                                                                                                           |
| 2-3 *          | Enable (MAX8554 only)                                                                                                                                                                             |
| Open           | With the MAX8554, enable and shutdown are controlled by a digital control signal connected to EN/REFIN. With the MAX8553, JU2 must be left open and the reference input is connected to EN/REFIN. |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Table 3. JU3-Frequency Selection

| JU3 POSITION   |   SWITCHING FREQUENCY (kHz) |
|----------------|-----------------------------|
| 1-2            |                         550 |
| 1-3 *          |                         200 |
| 1-4            |                         400 |
| Open           |                         300 |

the shunt from JU2 and connect the logic signal to EN/REFIN. For shutdown with the MAX8553, see the Evaluating the MAX8553 section.

## Changing the Switching Frequency

The switching frequency is selected using JU3 (see Table 3). The EV kit circuit components are optimized for operation at 200kHz. To evaluate other frequencies of  operation, refer to the MAX8553/MAX8554 data sheet for information on selecting the optimal components for higher frequency operation.

## Bypassing the VL Regulator

When operating the EV kit with an input supply between 4.5V and 5.5V, it may be desirable to power the IC from the same input supply. To do this, short the pads of JU4. If  the  input  voltage  is  less  than  4.5V,  a  separate supply is needed (see the V+ Selection section). If an input  voltage  greater  than  5.5V  is  used,  JU4  must  be open; otherwise, the IC can be damaged (see Table 4).

## Setting the Output Voltage (MAX8554 Only)

To change the output voltage of the MAX8554 EV kit, replace R2 with a resistor calculated from the following equation:

<!-- formula-not-decoded -->

where R3 is 6.04k Ω .

For best performance, it may be necessary to change other components when changing the output voltage. Refer to the MAX8553/MAX8554 data sheet for more information.

<!-- image -->

## Optional Droop Resistor

In some cases a droop resistor is desirable because it adds voltage positioning to the output. Refer to the MAX8553/MAX8554 data sheet for more information on selecting the droop resistor. Before installing the droop resistor (R14), cut the PC board traces that are shorting the resistor pads.

## Evaluating the MAX8553

The MAX8554 EV kit can be used to evaluate the MAX8553 tracking step-down controller. Free samples of the MAX8553 can be obtained from Maxim. Using the MAX8553 requires significant changes to other components on the EV kit. Refer to the MAX8553/MAX8554 data sheet for information on component selection.

## SHDN Input

To  provide  a  shutdown  feature  when  using  the MAX8553, populate Q1 with an N-channel MOSFET and  R9  with  a  pulldown  resistor.  Refer  to  the MAX8553/MAX8554 data sheet for part numbers and values. Logic high at SHDN places the circuit in lowpower shutdown mode. Leave SHDN open or pull low for normal operation. The SHDN pad is not used in the default EV kit configuration with the MAX8554.

## VTTR Output

VTTR connects to the VTTR output of the MAX8553 and is capable of sourcing or sinking up to 25mA of current. The VTTR output voltage is one-half of the voltage applied to EN/REFIN. The VTTR pad is not used (leave unconnected) in the default EV kit configuration with the MAX8554.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8554 Evaluation Kit

## Table 4. JU4-VL Regulator Bypass

| POSITION   | FUNCTION                                                                                                |
|------------|---------------------------------------------------------------------------------------------------------|
| OPEN *     | IC power is provided by the internal VL regulator.                                                      |
| SHORT      | Shorts VL to IN so the IC is powered from IN. In this configuration, the maximum voltage at IN is 5.5V. |

## MAX8554 Evaluation Kit

## Component Suppliers

| SUPPLIER                | PHONE        | WEB                    |
|-------------------------|--------------|------------------------|
| BI Technologies         | 714-447-2345 | www.bitechnologies.com |
| Central Semiconductor   | 631-435-1110 | www.centralsemi.com    |
| International Rectifier | 310-322-3331 | www.irf.com            |
| Kamaya                  | 260-489-1533 | www.kamaya.com         |
| Murata                  | 814-237-1431 | www.murata.com         |
| Panasonic               | 714-373-7939 | www.panasonic.com      |
| Rubycon                 | 0265-72-7111 | www.rubycon.co.jp      |
| Sanyo                   | 619-661-6835 | www.sanyo.com          |
| Sumida                  | 847-545-6700 | www.sumida.com         |
| Taiyo Yuden             | 408-573-4150 | www.t-yuden.com        |
| TDK                     | 847-803-6100 | www.component.tdk.com  |
| Vishay                  | 402-564-3131 | www.vishay.com         |

Note: Please indicate you are using the MAX8553/MAX8554 when contacting these manufacturers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX8554 Evaluation Kit

<!-- image -->

Figure 1. MAX8554 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Evaluates:  MAX8553/MAX8554

## MAX8554 Evaluation Kit

Figure 2. MAX8554 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 3. MAX8554 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

<!-- image -->

Figure 4. MAX8554 EV Kit PC Board Layout-Layer 2 (Ground)

<!-- image -->

## MAX8554 Evaluation Kit

Figure 5. MAX8554 EV Kit PC Board Layout-Layer 3

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8554 Evaluation Kit

Figure 6. MAX8554 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600