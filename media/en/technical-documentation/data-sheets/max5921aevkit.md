<!-- lastmod 2022-08-05 -->
<!-- image -->

## General Description

The MAX5921A evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board that provides current-limiting and multilevel fault protection using the MAX5921A hot-swap controller. The EV kit demonstrates the autoretry, configurable input undervoltage, overvoltage, and overcurrent monitoring features of the MAX5921A. The MAX5921A controls an external N-channel MOSFET to provide load-current regulation.

The EV kit circuit undervoltage and overvoltage thresholds are configured to -32V and -80V, respectively, which makes the EV kit well suited for -48V telecom systems. The input operating voltage range is -20V to -80V (-48V rail systems). The EV kit is designed to withstand -100V input transients. The current-limiting threshold is configured for 1.8A output current.

The EV kit can also be used to evaluate different versions of the MAX5920, MAX5921, or MAX5939 hotswap controllers after removing the MAX5921A.

The MAX5920A/B are pin- and function-compatible with the LT4250 hot-swap controllers and pin-compatible with LT1640.

Warning: The MAX5921A EV kit is designed to operate with high voltages. Dangerous voltages are present on this EV kit and on equipment connected to it. Users who power up this EV kit or power the sources connected to it must be careful to follow safety procedures appropriate to working with high-voltage electrical equipment.

Under severe fault or failure conditions, this EV kit may dissipate large amounts of power, which could result in the mechanical ejection of a component or of component debris at high velocity. Operate this kit with care to avoid possible personal injury.

The EV kit user should not probe the circuit with an oscilloscope probe and ground clip unless they have 'high-voltage, hot-swap experience.'

## Features

- ♦ Evaluates MAX5920A/B (LT1640/LT4250 Pin-Compatible)
- ♦ Withstands -100V Input Transients
- ♦ Circuit Breaker Immune to Input Voltage Steps and Current Spikes
- ♦ Input Undervoltage/Overvoltage Thresholds Configured for -32V and -80V
- ♦ Configured to 1.8A Output Current
- ♦ Demonstrates Unique Current Regulation Architecture
- ♦ Programmable Current Limit
- ♦ Programmable Output Undervoltage/Overvoltage Monitoring
- ♦ Evaluates Other MAX5920/MAX5921/MAX5939 Hot-Swap Controllers (IC Replacement Required)
- ♦ Surface-Mount Components
- ♦ Fully Assembled and Tested

## Ordering Information

| PART          | TEMP RANGE   | IC PACKAGE   |
|---------------|--------------|--------------|
| MAX5921AEVKIT | 0°C to +70°C | 8 SO         |

Note: To evaluate other versions of the MAX5920, MAX5921, or  MAX5939, request the desired free sample IC with the MAX5921AEVKIT.

## Component Suppliers

| SUPPLIER                | PHONE        | FAX          | WEBSITE               |
|-------------------------|--------------|--------------|-----------------------|
| Central Semiconductor   | 631-435-1110 | 631-435-1824 | www.centralsemi.com   |
| International Rectifier | 310-322-3331 | 310-726-8721 | www.irf.com           |
| IRC                     | 361-992-7900 | 361-992-3377 | www.irctt.com         |
| Sanyo USA               | 619-661-6322 | 619-661-1055 | www.sanyovideo.com    |
| TDK                     | 847-803-6100 | 847-390-4405 | www.component.tdk.com |

Note: Please indicate that you are using the MAX5921A when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5921A Evaluation Kit

## Component List

| DESIGNATION              |   QTY | DESCRIPTION                                                          |
|--------------------------|-------|----------------------------------------------------------------------|
| C1                       |     0 | Not installed, capacitor (0805)                                      |
| C2                       |     1 | 0.015µF ±10%, 100V X7R ceramic capacitor (0805) TDK C2012X7R2A153KT  |
| C3                       |     0 | Not installed, capacitor (16 x 16.5)                                 |
| C4                       |     1 | 100µF ±20%, 100V electrolytic capacitor (16 x 16.5) Sanyo 100CV100BS |
| C5                       |     0 | Not installed, capacitor (1206)                                      |
| C6                       |     1 | 4700pF ±10%, 50V X7R ceramic capacitor (0603) TDK C1608X7R1H472K     |
| C7                       |     1 | 0.1µF ±10%, 100V X7R ceramic capacitor (1206) TDK C3216X7R2A104KT    |
| D1                       |     1 | 90V ±5% zener diode (SMA) Central Semiconductor CMZ5948B             |
| D2                       |     0 | Not installed, diode (SMA)                                           |
| N1                       |     1 | 100V 17A N-channel MOSFET (D^2 PAK) International Rectifier IRF530NS |
| R1                       |     1 | 0.02 Ω ±1%, 0.5W sense resistor (1206) IRC LRF1206-01-R020-F         |
| R2                       |     1 | 10 Ω ±5% resistor (0805)                                             |
| R3                       |     1 | 1k Ω ±1% resistor (0805)                                             |
| R4                       |     1 | 604k Ω ±1% resistor (0603)                                           |
| R5                       |     1 | 14.3k Ω ±1% resistor (0603)                                          |
| R6                       |     1 | 10k Ω ±1% resistor (0603)                                            |
| R7                       |     1 | 100k Ω ±5% resistor (0603)                                           |
| R8                       |     1 | 100 Ω ±5% resistor (0805)                                            |
| SW1                      |     1 | Momentary contact switch                                             |
| U1                       |     1 | MAX5921AESA (8-pin SO)                                               |
| +VIN, -VIN, +VOUT, -VOUT |     4 | Noninsulated banana jack connectors                                  |
| None                     |     1 | MAX5921A PC board                                                    |

## Quick Start

The MAX5921A EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

- 1) Utilizing very short 5A rated banana leads (&lt; 6in long) connect the most positive terminal of a 48V DC power supply  to  the  +VIN  banana  jack. Utilizing very short 5A rated banana leads (&lt; 6in long) connect the most negative terminal of this power supply to the -VIN banana jack.
- 2) Connect a voltmeter to the +VOUT and -VOUT output pads.
- 3) Connect a voltmeter across the PWRGD and -VIN pads
- 4) Turn on the power supply and verify that the output voltage is -48V.
- 5) Verify that the voltage at the PWRGD pad is at 0V.
- 6) Press the push-button SW1 to reset the output.
- 7) Test point TP1 is provided to observe the MOSFET gate (N1) voltage with an oscilloscope.

## Note:

- When evaluating the MAX5921A EV kit with an external module, remove resistor R7 and capacitor C4.
- The banana leads connecting the power supply and the load to the EV kit must be very short (&lt; 6in long) and rated for at least 5A of current.

## Detailed Description

The MAX5921A EV kit is a hot-swap controller circuit board that provides a controlled turn-on for highcapacitive loads, thus preventing glitches on the powersupply rail. The circuit uses the MAX5921A hot-swap controller that operates with an input source range of -20V to -80V connected across the -VIN and +VIN inputs and can withstand input transients up to -100V. The MAX5921A features an autoretry mode, configurable input undervoltage, overvoltage, and overcurrent monitoring. The MAX5921A controls an N-channel MOSFET (N1) connected between -VIN and -VOUT to provide load current regulation.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5921A Evaluation Kit

The EV kit circuit ensures that the input voltage is stable and within the undervoltage and overvoltage thresholds, which are configured to -32V and -80V, respectively. The circuit  continually monitors the load current so that it does not exceed the current-limiting threshold of 2.5A across sense resistor R5 for longer than 0.5ms. During such an event, the hot-swap controller turns off MOSFET N1 and restarts the power-up sequence. The PWRGD output signal is pulled to -VIN during normal operation and to +VIN by R7 during fault conditions.

The EV kit board features a 90V zener diode (D1) and a resistor-capacitor (R8-C7) network to allow the EV kit circuit  to  withstand  -100V  input  transients.  A  transient voltage suppressor diode can also be added at the D2 PC board pads to suppress input transients higher than -100V. Inrush current control to the output can be reconfigured by replacing components C2 and R3. Capacitor C1 may be required when evaluating the LT1640/LT4250. Refer to the Component Selection Procedure section on the MAX5921/MAX5939 data sheet for detailed information.

The EV kit can also be used to evaluate other versions of the MAX5920, MAX5921, or MAX5939 hot-swap controllers after replacing the MAX5921A IC.

## Input Voltage

The MAX5921A EV kit can operate from an input source of  -20V to -80V connected across -VIN and +VIN. However, the EV kit is configured for an operating range of -32V to -80V. The MAX5921A controller begins to function when the input voltage exceeds the internal undervoltage lockout (UVLO) voltage threshold of -15.4V (typ). It continues to hold the GATE pin low, isolating  the  power  supply  from  the  output  until  the  programmed undervoltage protection (UVP) threshold of -32V is exceeded. Once the input voltage exceeds the UVP threshold, the controller slowly turns on MOSFET N1 to connect power to the load.

## UVP and OVP

The MAX5921A EV kit UVP threshold is programmed to -32V and the overvoltage protection (OVP) threshold is programmed to -80V with external resistors R4, R5, and R6. If the voltage at +VIN drops below the UVP threshold or exceeds the OVP threshold, the MAX5921A controller turns off MOSFET N1 and the controller pulls the PWRGD output signal to +VIN to signal a fault (in an overvoltage condition PWRGD output is not pulled to +VIN). The controller returns to normal operation and pulls PWRGD to -VIN if the input voltage returns to within the UVP (-32V) and OVP (-80V) thresholds. The UVP and OVP thresholds can be reconfigured in the range of -20V and -80V by replacing resistors R4, R5, and R6.

<!-- image -->

Use the following formula to select new resistor values:

<!-- formula-not-decoded -->

where UVP is the desired undervoltage threshold, OVP is the desired overvoltage threshold, and R6 is typically 10k Ω .  The undervoltage threshold must be programmed to be greater than the internal undervoltage lockout threshold of -15.4V (typ).

## Current Limit and Regulation

The MAX5921A hot-swap controller provides currentlimiting  and  current  regulation  capabilities  that  protect against excessive load current and short-circuit conditions. The load current is monitored by sensing the voltage across current-sense resistor R1. The current-limit voltage trip point (VLIM) of the controller is 50mV (typ). The EV kit circuit current limit is programmed to 2.5A with  the  20m Ω (2.5A x 20m Ω = 50mV) sense resistor R1. If  the  voltage  across  the  sense  resistor  exceeds VLIM, the hot-swap controller pulls down the GATE voltage to regulate the load current to 2.5A. If the load current is at the regulation limit of 2.5A for more than 0.5ms (tLIM), the electronic circuit breaker trips, causing the external MOSFET to turn off. The MAX5921A will automatically retry after detecting a fault condition. Refer to the MAX5921/MAX5939 data sheet's Current Limit and Electronic Circuit Breaker section for more details.

## Autoretry

The MAX5921A enters Autoretry mode when it detects a current-limit fault condition. In this mode, the hotswap controller turns off the MOSFET for a period of 64ms (tOFF) before it attempts to execute a new startup procedure. The controller cycles on and off until the fault  condition is cleared. The off period (tOFF) is defined as tOFF = 1/DC x tLIM, where the tLIM period of 0.5ms and the duty cycle (DC) of 1/128 are inherent to the MAX5921A hot-swap controller. Other versions of the MAX5921 hot-swap controllers are programmed with tLIM of  0.5ms, 1ms, or 2ms (see the Evaluating MAX5920/MAX5921/MAX5939 Hot-Swap Controllers section).

The MAX5920\_ and MAX5939\_ hot-swap controllers latch off after a current-limit fault condition.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5921A Evaluation Kit

## Disable/Fault Reset

The MAX5921A EV kit features a push-button switch SW1 to disable the EV kit output. When pressed, the switch connects the UV pin of the MAX5921A IC to -VIN and disables the EV kit output.

## Latch-Fault Management (MAX5920\_ and MAX5939\_)

The SW1 switch can be used to reset latched faults when the MAX5920\_ or MAX5939\_ hot-swap controllers have been installed on the EV kit board. The reset command can be issued immediately after a fault condition; however, the hot-swap controller does not restart until tOFF delay time has elapsed after the fault. Cycling the input power also disables the output or clears latched faults.

## PWRGD Output

The PWRGD output can be used as a status signal or to enable an active-low power module after a hot insertion. The PWRGD output signal is pulled to -VIN during normal operation and pulled to +VIN during an undervoltage or current-limit fault  condition. When evaluating the MAX5921A EV kit with an external module, remove resistor R7 and capacitor C4.

## GATE Pin Voltage

The GATE pin on the MAX5921\_ controller drives the gate pin of external MOSFET N1 high when the input voltage is between the UVP and OVP thresholds and the output current has not exceeded the current-limit threshold. The GATE voltage is regulated at 13.5V above -VIN and can be monitored with differential oscilloscope probes connected across test point TP1 and -VIN. The MAX5921\_ controller contains an internal voltage clamp that ensures the GATE voltage never exceeds 18V. If MOSFET N1 is replaced, the MOSFET must have a VGS rating of at least 20V.

## Evaluating MAX5920/MAX5921/MAX5939

## Hot-Swap Controllers

The MAX5921A EV kit can also evaluate other versions of the MAX5920, MAX5921, or MAX5939 hot-swap controllers.  Table 1 lists  the  features  among the other hotswap controllers that can be evaluated with the MAX5921A EV kit board. Refer to the MAX5920 or MAX5921/MAX5939 data sheets for detailed information of these products. The MAX5921A must be removed and replaced by the desired IC. Remove resistor R7 when evaluating ICs with an active-high output signal. When evaluating the MAX5921A EV kit with an external module remove resistor R7 and capacitor C4.

## Table 1. MAX5920/MAX5921/MAX5939 Hot-Swap Controllers

| PART     | OUTPUT SIGNAL   | LATCHED/AUTORETRY   | t LIM (ms)   | AUTORETRY DUTY CYCLE   |
|----------|-----------------|---------------------|--------------|------------------------|
| MAX5920_ | PWRGD , PWRGD   | Latched             | 0.5, 1, 2    | 1/128                  |
| MAX5921_ | PWRGD , PWRGD   | Autoretry           | 0.5, 1, 2    | 1/128, 1/64, 1/32      |
| MAX5939_ | PWRGD , PWRGD   | Latched             | 0.5, 1, 2    | 1/128                  |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5921A Evaluation Kit

<!-- image -->

Figure 1. MAX5921A EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5921A Evaluation Kit

<!-- image -->

Figure 2. MAX5921A EV Kit Component Placement GuideComponent Side

Figure 3. MAX5921A EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX5921A EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6