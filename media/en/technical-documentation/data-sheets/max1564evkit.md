<!-- lastmod 2022-08-04 -->
## General Description

The MAX1564 evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board that demonstrates the MAX1564 triple 1.2A USB switch. The EV kit operates from a +2.7V to +5.5V input power supply and is capable of sourcing up to 1.2A from each output. The MAX1564 features an adjustable current-limit and autorestart function for overload and short-circuit protection. A 20ms fault-blanking time prevents erroneous faults caused by load transients and capacitive loads. The MAX1564 is assembled in the space-saving 16-pin, 4mm x 4mm thin QFN package.

## Component List

| DESIGNATION            |   QTY | DESCRIPTION                                                                          |
|------------------------|-------|--------------------------------------------------------------------------------------|
| C1                     |     1 | 0.1µF ±10%, 16V X5R ceramic capacitor (0603) Taiyo Yuden EMK107BJ104KA or equivalent |
| C2, C3, C4             |     3 | 1µF ±10%, 10V X5R ceramic capacitors (0603) TDK C1608X5R1A105K or equivalent         |
| JU1, JU2, JU3          |     3 | 3-pin headers                                                                        |
| R1                     |     1 | 26.1k Ω ±1% resistor (0603)                                                          |
| R2, R3, R4, R7, R8, R9 |     6 | 100k Ω ±5% resistors (0603)                                                          |
| R5, R6                 |     2 | Not installed (0603)                                                                 |
| U1                     |     1 | MAX1564ETE (16-pin TQFN)                                                             |
| None                   |     3 | Shunts                                                                               |
| None                   |     1 | MAX1564 EV kit PC board                                                              |

## Quick Start

The MAX1564 EV kit is fully assembled and tested. Follow these steps to verify board operation:

- 1) Preset the power supply to 2.7V and turn off the power supply. Do not turn the power supply on until all connections are made.
- 2) Verify on the MAX1564 EV kit that there is a shunt across pins 1 and 2 of JU1, JU2, and JU3 to enable all three channels of the device.
- 3) Connect the positive lead of the power supply to the VIN pad on the EV kit and the negative lead of the power supply to the GND pad on the EV kit.
- 4) Connect the positive lead of the DMM to the OUTA pad on the EV kit and the negative lead of the DMM

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Features

- ♦ Tiny 16-Pin (4mm x 4mm) Thin QFN Package
- ♦ Reverse Current Blocking
- ♦ Programmable Current-Limit
- ♦ Autorestart When Fault is Removed
- ♦ 12% Accurate Current-Limit
- ♦ Up to 1.2A Load Current for Each Output
- ♦ Thermal Overload Protection
- ♦ Built-In 20ms Fault Blanking
- ♦ Compliant to All USB Specifications
- ♦ 2.7V to 5.5V Input Supply Range
- ♦ Independent Fault Indicator Outputs
- ♦ Active-High/Active-Low Select Pin
- ♦ ±15kV ESD Protection (With Capacitors)
- ♦ UL Listing Pending
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE          |
|--------------|--------------|---------------------|
| MAX1564EVKIT | 0°C to +70°C | 16 TQFN (4mm x 4mm) |

to the GNDA pad on the EV kit to measure the output voltage at switch channel A.

- 5) Turn on the power supply and sweep the input voltage from 2.7V to 5.5V.
- 6) Verify  that  the  output  voltage  tracks  the  voltage  at VIN over the entire input range.
- 7) Set the power supply to 5V.
- 8) Connect the 1.2A load between the VOUTA and GNDA pads on the EV kit.
- 9) Verify that the output voltage is approximately 5V.
- 10) Repeat these steps for the OUTB and OUTC outputs.

Maxim Integrated Products

1

## MAX1564 Evaluation Kit

## Detailed Description

## FLTA , FLTB, and FLTC

The MAX1564 provides an independent open-drain fault output ( FLT\_ ) for each switch. In the MAX1564 EV kit,  the FLT\_ outputs are connected to IN\_ through a 100k Ω pullup resistor. FLT\_ asserts low when any of the following conditions occur:

- The input voltage is below the UVLO threshold.
- The switch junction temperature exceeds the +160°C thermal-shutdown temperature limit.
- The switch is in current-limit or short-circuit currentlimit  mode after the fault-blanking period (20ms) expires.
- The reverse current condition exists after the faultblanking period expires.

The FLT\_ output goes high impedance after a 20ms delay once the fault condition is removed. Refer to the MAX1564 IC data sheet for more details on fault protection and fault blanking.

## Shutdown (SEL, ONA, ONB, ONC)

SEL sets the active polarity of the logic inputs of the MAX1564. R5 and R6 are available to set the input to SEL. R5 comes shorted to connect SEL to VIN. To connect SEL to GND, cut the short on R5 and short R6.

JU1, JU2, and JU3 are available for ON\_ control (Table 1). Connect a shunt across JU1 to connect ONA to VIN, connect a shunt across JU2 to connect ONB to VIN, and connect a shunt across JU3 to connect ONC to VIN.

Remove the shunts to connect the respective ON\_ to GND. With the default setting for SEL (R5 shorted), installing the shunt enables the respective OUT\_. The output of a disabled switch enters a high-impedance state.

## Setting the Current Limit

The current-limit for the MAX1564 is user programmable using the SETI input. Connect a resistor from SETI to GND (R1) to set the current limit. The value for R1 is calculated as:

I LIMIT = 1.37A x 26k Ω / R1

R1 must be between 26k Ω and 60k Ω .

## Input Supply Considerations

When evaluating the MAX1564 EV kit on the bench, take care to use short input leads (&lt; 6in). The inductance of longer leads can cause oscillations during an overload or short circuit that exceed the absolute maximum rating (6V) on the input and can damage the IC. If short leads cannot be used, add a bulk capacitor to the input  to  eliminate  these  voltage  spikes.  This  capacitor is not necessary in the final application.

## Jumper Settings

## Table 1. Jumper JU1, JU2, JU3 Functions (ON\_ Control)

| SHUNT LOCATION   | ON_ PIN          | OPERATION        |
|------------------|------------------|------------------|
| On               | Connected to VIN | Normal operation |
| Off              | Connect to GND   | Shutdown mode    |

## Component Suppliers

| SUPPLIER    | COMPONENT   | WEBSITE               |
|-------------|-------------|-----------------------|
| Taiyo Yuden | Capacitors  | www.t-yuden.com       |
| TDK         | Capacitors  | www.component.tdk.com |
| Vishay      | Resistors   | www.vishay.com        |

Note: Indicate that you are using the MAX1564 when contact- ing these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1564 Evaluation Kit

<!-- image -->

Figure 1. MAX1564 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1564 Evaluation Kit

<!-- image -->

Figure 2. MAX1564 EV Kit Component Placement Guide-Top Silkscreen

Figure 3. MAX1564 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX1564 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600