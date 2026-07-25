<!-- lastmod 2022-08-05 -->
<!-- image -->

## General Description

The MAX4211E evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board that provides overpower circuit-breaker and fault protection using the MAX4211E power-monitoring IC. The EV kit demonstrates the programmable overpower monitoring feature with manual or microcontroller reset options of the MAX4211E. The MAX4211E controls an external p-channel high-side power MOSFET to provide overpower fault protection.

The MAX4211E EV kit's circuit overpower threshold is configured for 100W with a maximum input voltage of 20V and up to 5A of load current. This makes it suitable for  circuit-breaker  applications in  notebooks and other portable power systems. The EV kit may be reconfigured for other power thresholds with a maximum load current of up to 10A.

The EV kit can also be used to evaluate other versions of the MAX4211 power-monitoring ICs.

| DESIGNATION   |   QTY | DESCRIPTION                                                          |
|---------------|-------|----------------------------------------------------------------------|
| C1            |     0 | Not installed, electrolytic capacitor (8 x 10.2)                     |
| C2, C8        |     2 | 0.1µF ±10%, 50V X7R ceramic capacitors (0603) TDK C1608X7R1H104K     |
| C3, C4, C6    |     0 | Not installed, capacitors (0603)                                     |
| C5            |     0 | Not installed, electrolytic capacitor (16 x 16.5)                    |
| C7            |     1 | 0.015µF ±10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H153K |
| D1            |     1 | 5.1V zener diode (SOD323) Central Semiconductor CMDZ5231B            |
| JU1           |     1 | 3-pin header                                                         |
| JU2, JU3      |     2 | 2-pin headers                                                        |
| P1            |     1 | 40V, 11A p-channel MOSFET (SO8) Fairchild Semiconductor FDS4675      |

## Features

- ♦ Configured for 100W Overpower Threshold
- ♦ Configured for 5V to 20V Maximum Input Voltage
- ♦ Configured for 5A Load-Current Threshold
- ♦ Reconfigurable Overpower Thresholds
- ♦ Immune to Power-Up Capacitive Load Spikes
- ♦ Configurable Reset (Manual or Microcontroller)
- ♦ Surface-Mount Components
- ♦ Fully Assembled and Tested
- ♦ Evaluates MAX4211A, MAX4211B, MAX4211C, MAX4211D, or MAX4211F (IC Replacement Required)

## Ordering Information

| PART          | TEMP RANGE   | IC PACKAGE   |
|---------------|--------------|--------------|
| MAX4211EEVKIT | 0°C to +70°C | 16 Thin QFN  |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                          |
|---------------|-------|------------------------------------------------------|
| R1            |     1 | 0.02 Ω ±1%, 2W resistor (2512) IRC LRCLRF251201R020F |
| R2            |     1 | 133k Ω ±1% resistor (0603)                           |
| R3            |     1 | 6.98k Ω ±1% resistor (0603)                          |
| R4, R5, R8    |     0 | Not installed, resistors (0603)                      |
| R6, R7        |     2 | 10k Ω ±1% resistors (0603)                           |
| R9            |     1 | 80.6k Ω ±1% resistor (0603)                          |
| R10           |     1 | 75k Ω ±1% resistor (0603)                            |
| R11           |     1 | 49.9k Ω ±1% resistor (0603)                          |
| R12           |     1 | 15k Ω ±1% resistor (0603)                            |
| SW1           |     1 | Momentary pushbutton switch                          |
| TP1, TP2      |     2 | Test points (red)                                    |
| U1            |     1 | MAX4211EETE (16-pin thin QFN, 4mm x 4mm)             |
| None          |     3 | Shunts                                               |
| None          |     1 | MAX4211E EV kit board                                |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

## MAX4211E Evaluation Kit

## Component Suppliers

| SUPPLIER              | PHONE        | FAX          | WEBSITE               |
|-----------------------|--------------|--------------|-----------------------|
| Central Semiconductor | 631-435-1110 | 631-435-1824 | www.centralsemi.com   |
| Fairchild             | 888-522-5372 | -            | www.fairchildsemi.com |
| IRC                   | 361-992-7900 | 361-992-3377 | www.irctt.com         |
| Murata                | 770-436-1300 | 770-436-3030 | www.murata.com        |
| TDK                   | 847-803-6100 | 847-390-4405 | www.component.tdk.com |

Note: Indicate that you are using the MAX4211E when contacting these component suppliers.

## Selector Guide

| PART        |   POWER- SENSE AMPLIFIER GAIN |   MAXIMUM SENSE VOLTAGE (mV) | IN RESISTOR- DIVIDER   |
|-------------|-------------------------------|------------------------------|------------------------|
| MAX4211AETE |                         0.667 |                          150 | Internal               |
| MAX4211BETE |                          1.00 |                          150 | Internal               |
| MAX4211CETE |                          1.64 |                          100 | Internal               |
| MAX4211DETE |                         16.67 |                          150 | External               |
| MAX4211EETE |                         25.00 |                          150 | External               |
| MAX4211FETE |                         40.96 |                          100 | External               |

## Quick Start

The MAX4211E EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

## Recommended Equipment

- 0 to 20V power supply capable of providing up to 5A
- 5V power supply
- Electronic load capable of sinking up to 5A (e.g., HP 6060B)

## Procedures

- 1) Verify that a shunt is installed across pins 2 and 3 of jumper JU1.
- 2) Verify that shunts are installed on jumpers JU2 and JU3.
- 3) Set the 0 to 20V power supply to 10V and disable the output.
- 4) Connect the positive terminal of the 0 to 20V DC power supply to the VSOURCE pad on the EV kit board. Connect the ground of this power supply to the GND pad located above the VSOURCE pads.
- 5) Connect a voltmeter across the VSOURCE and GND pads.
- 6) Connect the positive terminal of the 5A DC electronic current load to the LOAD pad on the EV kit board. Connect the ground terminal of the electronic load to the GND pad located above the LOAD pad on the EV kit.
- 7) Connect the positive terminal of the 5V DC power supply to the VCC pad. Connect the ground of this power supply to the GND pad located below the VCC pad on the EV kit board.
- 8) Connect a voltmeter across the LOAD and GND pads on the EV kit board.
- 9) Connect a voltmeter across the TP2 test point and GND pad.
- 10) Turn on the 5V power supply.
- 11) Enable the 0 to 20V (10V) power supply.
- 12) Turn on the electronic current load.
- 13) Verify that the voltmeter connected across the LOAD and GND pads measures 10V.
- 14) Verify that the voltmeter connected at test point TP2 measures approximately 1.25V.
- 15) Gradually increase the VSOURCE power supply towards 20V to cause an overpower fault,
- 16) After  the  fault,  verify  that  the  voltmeter  connected across the LOAD and GND pads measures 0V.
- 17) Verify  that  the  voltmeter  connected at TP2 measures 0V.
- 18) Reduce VSOURCE to 10V and then reset the circuit by momentarily pressing pushbutton SW1. Verify that the voltmeter connected at TP2 measures approximately 1.25V and LOAD voltage returns to 10V.

## Detailed Description

The MAX4211E EV kit is a power-monitoring, circuitbreaker circuit that safeguards the supply source against excessive power dissipation due to overvoltage, overcurrent, or short-circuit conditions at the output. The circuit  uses the MAX4211E power-monitoring IC that operates with a VCC voltage range of 2.7V to 5.5V.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX4211E Evaluation Kit

The load can be supplied through an independent supply source connected across the VSOURCE and GND pads and can range from 5V to 20V. The MAX4211E controls an external high-side p-channel power MOSFET switch that disconnects the supply source from the load under overpower fault conditions.

During normal operation, the EV kit circuit continually monitors the power delivered to the load. When the power delivered to the load exceeds the configured maximum power threshold, the circuit disconnects the supply source from the load thus providing overpower fault protection. The EV kit can be reset to normal operation by first  removing the fault condition and then momentarily pressing pushbutton SW1. The EV kit is configured for a power threshold of 100W with an input source voltage threshold of 20V and load-current threshold of 5A. The MAX4211E EV kit can be reconfigured to monitor up to 10A of current.

## Input Voltages

The MAX4211E EV kit provides the flexibility of having independent power-supply sources for the IC and the load. The EV kit is configured for a maximum VSOURCE of  20V  and a VCC of  5V.  To  reconfigure  the  EV  kit's VSOURCE maximum input voltage for up to 28V, see the Overpower Threshold section. Set the VCC voltage in the range of 2.7V to 5.5V.

## Overpower Threshold

The overpower threshold for the MAX4211E EV kit is set to 100W with a maximum VSOURCE input voltage of 20V and maximum load current of 5A. During normal operation,  the  EV  kit  circuit  continually  monitors  the  power delivered to the load. When the power delivered to the load exceeds the 100W threshold (after exceeding the 20V and 5A thresholds), the MAX4211E disconnects the supply source from the load. This is done by switching MOSFET P1 off when the MAX4211E COUT1 pin latches high.

Table 1. Jumpers JU1/JU2/JU3 Functions

| SHUNT LOCATION ON JU1   | SHUNT LOCATION ON JU2   | SHUNT LOCATION ON JU3   | PIN CONNECTIONS                                                                         | EV KIT FUNCTION                     |
|-------------------------|-------------------------|-------------------------|-----------------------------------------------------------------------------------------|-------------------------------------|
| 2 and 3                 | Installed               | Installed               | CIN2- connected to GND and COUT1 connected to SW1.                                      | Manual reset. Press SW1.            |
| 1 and 2                 | Not installed           | Installed               | CIN2- pad connected to the microcontroller output, and COUT2 connected to COUT1 and LE. | Microcontroller reset. Active high. |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

To reconfigure the MAX4211E EV kit for a different overpower threshold, the VSOURCE and load-current thresholds must be modified. Reconfigure the VSOURCE voltage threshold for up to 28V by selecting new resistor values for R2 and R3 using the following equation:

<!-- formula-not-decoded -->

where  resistor  R3  is  typically  6.98k Ω and  the VSOURCE\_THRESHOLD is the new desired value. This step ensures that the MAX4211E POUT pin is 2.5V when the maximum power is delivered to the load.

The MAX4211E EV kit board is configured for a loadcurrent threshold of 5A DC, however, the 2oz PC board traces can handle up to 10A. Use the following equation to select a new value for current-sense resistor R1 (2512 case):

<!-- formula-not-decoded -->

Verify that the resistor R1 and MOSFET P1 are rated for the new current level.

## Reset

During an overpower fault condition, the MAX4211E EV kit  circuit  latches  off.  To  reset  the  circuit,  remove  the fault  condition  and  momentarily press the pushbutton switch SW1. This clears the latched COUT1 pin on the MAX4211E.

The MAX4211E EV kit circuit reset function can also be controlled by connecting a microcontroller's output across the CIN2- and GND pads and configuring jumpers JU1, JU2, and JU3. See Table 1 for jumper configuration.

## MAX4211E Evaluation Kit

## Internal Comparators

The MAX4211E features two internal comparators. In the EV kit, circuit Comparator1 is used to detect overpower conditions. Comparator2 is disabled but can be configured for microcontroller reset or other comparator applications. To access CIN2+ of Comparator2, remove the shunt across JU3 and connect to pin 2 of JU3. To access CIN2-, remove the shunt across JU2 and connect to the CIN2- pad. The Comparator2 output can be accessed through pin 1 of JU1. CIN2+ can be left connected to REF through JU3 or can be accessed directly through pin 2 of jumper JU3.

## Power-Up

Transient surges in power may result when the EV kit is powered up with a capacitive load connected to the output (either C5 on the MAX4211E EV kit or to the LOAD PC board pad output). These transient conditions may be detected as an overpower condition and prevent MOSFET P1 from turning on. Though these transients might not always be sufficient to trip the circuit-breaker function, the MAX4211E possesses an INHIBIT circuit, which can prevent such transients from being registered as overpower conditions.

The MAX4211E EV kit features an RC network consisting of resistors R6 and capacitor C7 that connects the LOAD node to INHIBIT of the MAX4211E. During power-up, this RC network disables the internal comparator providing immunity against transient events for a period given by the equation:

<!-- formula-not-decoded -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

where ∆ V is  the  voltage  change at the LOAD during power-up or due to switching between different voltage sources.

The MAX4211E EV kit comes configured with tINHIBIT approximately equal to 425µs, for an expected ∆ V = 10V and a LOAD voltage settling time of 42.5µs. For some applications, this value might be too short to suspend the Comparator1 operation as power-up transients could be much slower. To adjust the inhibit time, select a value of tINHIBIT that is larger than the settling time (tLOAD) of the LOAD voltage. Selecting tINHIBIT = 10 x tLOAD, where tLOAD is the time constant of rising voltage at VLOAD during power-up, is a good design criterion.  Larger  tINHIBIT times will  reduce the number of false circuit-breaker trips, but can potentially subject VSOURCE to longer periods of exposure to momentary overpower conditions.

Also note that resistor R7 is merely an isolation resistor with a value that does not affect tINHIBIT.

## Evaluating the MAX4211A/B/C/D/F

The MAX4211E EV kit can also evaluate other versions of  the  MAX4211 power-monitoring IC. The MAX4211E IC must be removed and replaced with the desired IC. Refer to the MAX4210/MAX4211 IC data sheet for detailed  information  about  the  MAX4211  parts. Depending upon your version of the MAX4211, some of the external components may need replacement.

## MAX4211E Evaluation Kit

Figure 1. MAX4211E EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4211E Evaluation Kit

<!-- image -->

Figure 2. MAX4211E EV Kit Component Placement GuideComponent Side

Figure 3. MAX4211E EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX4211E EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600