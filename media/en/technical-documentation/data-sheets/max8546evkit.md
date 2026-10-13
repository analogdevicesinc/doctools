<!-- lastmod 2022-08-02 -->
## General Description

The MAX8546 evaluation kit (EV kit) is a fully assembled and tested circuit board that contains all the components necessary to evaluate the performance of the MAX8546 step-down DC-DC converter.

The EV kit comes with a MAX8546 IC installed. The EV kit's  circuit  is  optimized  for  a  10V  to  24V  input  range and 300kHz switching frequency, and delivers 2.5V at  6A to the output. To evaluate the MAX8545 or MAX8548, replace the IC with the desired part and refer to the MAX8545/MAX8546/MAX8548 data sheet to select the appropriate components for the EV kit.

| DESIGNATION   |   QTY | DESCRIPTION                                                                                     |
|---------------|-------|-------------------------------------------------------------------------------------------------|
| C1            |     1 | 1µF ± 10%, 10V X5R ceramic capacitor (0603) TDK C1608X5R1A105K                                  |
| C2, C3        |     2 | 470µF ± 20% , 35V al um i num el ectr ol yti c cap aci tor s (10mm ✕ 22mm) S anyo 35M V 470AX   |
| C4, C12       |     2 | 1µF ± 10%, 50V X7R ceramic capacitors (1206) TDK C3216X7R1H105K                                 |
| C5, C8, C9    |     3 | 0.1µF ± 10%, 50V X7R ceramic capacitors (0603) TDK C1608X7R1H104K                               |
| C6, C7        |     2 | 1500µF ± 20% , 6.3V al um i num el ectr ol yti c cap aci tor s (10mm ✕ 20mm) S anyo 6M V 1500AX |
| C10           |     1 | 6800pF ± 10%, 50V X7R ceramic capacitor (0603) TDK C1608X7R1H682K                               |
| C11           |     0 | Not installed, capacitor (0603)                                                                 |
| C13           |     1 | 1500pF ± 10%, 50V X7R ceramic capacitor (0603) TDK C1608X7R1H152K                               |

## MAXIM

- ♦ 10V to 24V Input Range (MAX8546)
- ♦ 300kHz Operation
- ♦ 2.5V at 6A Output
- ♦ Foldback Short-Circuit Protection
- ♦ Low-Cost Solution
- ♦ Evaluates the MAX8545, MAX8546, and MAX8548
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE   |
|--------------|--------------|--------------|
| MAX8546EVKIT | 0°C to +70°C | 10 µMAX      |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                           |
|---------------|-------|-----------------------------------------------------------------------------------------------------------------------|
| D1, D2        |     2 | 100mA, 30V Schottky diodes (SOT23) Central Semiconductor CMPSH-3                                                      |
| L1            |     1 | 4µH, 8.3A inductor Sumida CEP125-4R0                                                                                  |
| N1            |     1 | Dual N-channel MOSFET (8-pin SO) (LSFET 8.6A, 30V, 0.020 Ω HSFET 6.3A, 30V, 0.035 Ω ) Fairchild Semiconductor FDS6982 |
| Q1            |     1 | 200mA, 40V NPN bipolar transistor (SOT23) Fairchild Semiconductor MMBT3904                                            |
| R1            |     1 | 8.66k Ω ± 1% resistor (0805)                                                                                          |
| R2            |     1 | 4.02k Ω ± 1% resistor (0805)                                                                                          |
| R3            |     1 | 10 Ω ± 5% resistor (0805)                                                                                             |
| R4            |     1 | 68k Ω ± 5% resistor (0805)                                                                                            |
| R5, R6        |     2 | 10k Ω ± 5% resistors (0805)                                                                                           |
| R7            |     1 | 0 Ω ± 5% resistor (0603)                                                                                              |
| R8            |     1 | 3 Ω ± 5% resistor (0603)                                                                                              |
| R9            |     1 | 3 Ω ± 5% resistor (1206)                                                                                              |
| U1            |     1 | MAX8546EUB (10-pin µMAX)                                                                                              |
| None          |     1 | MAX8546 PC board                                                                                                      |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

<!-- image -->

## Features

## MAX8546 Evaluation Kit

## Procedure

The MAX8546 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed:

- 1) Connect a voltmeter across the VOUT and PGND pads.
- 2) Connect a 10V to 24V DC power supply to the VIN and PGND pads, with the voltage set in the 10V to 24V range.
- 3) Turn on the power supply.
- 4) Verify that VOUT is 2.5V ±3% throughout the 10V to 24V input voltage range.
- 5) Connect a 6A load between the VOUT and PGND pads, and verify that the output voltage is 2.5V ±3%.

## Detailed Description

The MAX8546 EV kit contains a step-down switching DC-DC converter. The switching frequency for the MAX8546 is internally set at 300kHz. The circuit uses two feedback resistors, R1 and R2, to set the output voltage. C10, C11, and R4 provide a compensation network for the MAX8546. D2 limits the initial peak inductor current during overload and short-circuit conditions.  The  evaluation  circuit  is  designed  to  achieve the lowest component cost.

## Input and Output Voltage Range

The MAX8546 evaluation circuit has an input range of 10V to 24V. The output is configured for 2.5V and can supply up to 6A. The PC board layout for this EV kit uses 2oz copper and is capable of conducting currents

## Component Suppliers

| SUPPLIER                | PHONE        | FAX          | WEBSITE               |
|-------------------------|--------------|--------------|-----------------------|
| Central Semiconductor   | 631-435-1110 | 631-435-1824 | www.centralsemi.com   |
| Fairchild Semiconductor | 888-522-5372 | -            | www.fairchildsemi.com |
| Sanyo                   | 619-661-6322 | 619-661-1055 | www.sanyovideo.com    |
| Sumida                  | 847-545-6700 | 847-545-6720 | www.sumida.com        |
| TDK                     | 847-803-6100 | 847-390-4405 | www.component.tdk.com |

Note: Please indicate that you are using the MAX8546 when contacting these component suppliers.

## Quick Start

## Recommended Equipment

- Adjustable 10V to 24V, 2A DC power supply
- Voltmeter
- Electronic load (set to resistive mode)

up to 10A with suitable external components. Refer to the MAX8545/MAX8546/MAX8548 data sheet regarding component selection for higher current applications.

## Other Output Voltages

The MAX8546 EV kit comes preset to 2.5V on VOUT. To set other output voltages for VOUT, refer to the MAX8545/MAX8546/MAX8548 data sheet for instructions on selecting external components.

## Current-Limit Protection

The MAX8546 EV kit's current limit is determined by the current-limit  threshold  of  the  MAX8546 and MOSFET N1's low-side RDSON. Use the following equation to evaluate other current limits:

<!-- formula-not-decoded -->

where the current-limit threshold of the MAX8546 is 165mV (typ) and LIR is the ratio of the peak-to-peak inductor current to the maximum-rated output current. Refer to the MAX8545/MAX8546/MAX8548 data sheet for a more detailed description of LIR.

Under short-circuit conditions, the current limit folds back to approximately 20% of its threshold, reducing power dissipation.

## Shutdown Control

The MAX8546 features a shutdown control pad that can be connected to an external (TTL) source to put the MAX8546 into shutdown mode. Transistor Q1 and resistors  R5  and  R6  provide the shutdown feature. A logic high at the SHDN pad shuts down the output VOUT, and a logic low turns on the output. Connect this logic signal across the SHDN and GND pads.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX8546 Evaluation Kit

<!-- image -->

Figure 1. MAX8546 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8546 Evaluation Kit

Figure 2. MAX8546 EV Kit Component Placement Guide-Component Side

<!-- image -->

Figure 3. MAX8546 EV Kit PC Board Layout-Component Side

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX8546 Evaluation Kit

<!-- image -->

Figure 4. MAX8546 EV Kit PC Board Layout-GND Layer 2

<!-- image -->

Figure 5. MAX8546 EV Kit PC Board Layout-VCC Layer 3

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8546 Evaluation Kit

Figure 6. MAX8546 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->