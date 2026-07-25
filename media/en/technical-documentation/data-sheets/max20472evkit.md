<!-- lastmod 2022-08-02 -->
## MAX20472 Evaluation Kit

## General Description

The  MAX20472  evaluation  kit  demonstrates  the  performance of the MAX20472 and MAX20472B, which is part of  the  MAX2047x  series  of  high-efficiency,  low-voltage DC-DC  converters.  The  converter  ICs  boost  a  3.0V  to 4.0V input supply to between 3.8V and 5.25V at up to 1A. The  boost  converters  achieve  ±1.5%  output  error  over load, line, and temperature range.

The IC features a 2.2MHz (2.0MHz for the MAX20472B) fixed-frequency  forced-PWM  (FPWM)  mode  for  better noise immunity and load-transient response, and a pulsefrequency modulation mode (skip) for increased efficiency during  light-load  operation.  The  2.2MHz  or  2.0MHz  frequency operation enables the use of all-ceramic capacitors and  minimizes  external  components.  The  programmable spread-spectrum-frequency  modulation  minimizes  radi -ated  electromagnetic  emissions.  Integrated  low  R DS(ON) switches improve efficiency at heavy loads and make the layout a much simpler task with respect to discrete solu -tions.

The regulator includes True Shutdown™, soft-start, overcurrent, and overtemperature protections.

## Features

- 3.0V to 4.0V Operating Supply Voltage
- 3.8V to 5.25V Fixed Output
- 1A Output Version Populated; Compatible with 500mA and 2A Output Versions
- 2.2MHz Operation for the MAX20472
- 2.0MHz Operation for the MAX20472B
- Feedback Injection Point-to-Test Stability
- Robust for the Automotive Environment
- Current Mode, Forced-PWM and Skip Operation
- Overtemperature and Short-Circuit Protection
- -40°C to +125°C Operating Range
- Proven PCB Layout
- Fully Assembled and Tested

True Shutdown is a trademark of Maxim Integrated Products, Inc.

Evaluates: MAX20472/MAX20472B

## Quick Start

## Required Equipment

- MAX20472 EV kit
- 3.3V, 2A power supply
- 5Ω, 25W resistor or 1A electronic load
- Digital multimeter (DMM)

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Connect the 3.3V supply to the VSUP and GND PCB test loops.
- 2) Remove the EN jumper.
- 3) Activate the supply. Use the DMM to verify that the voltage at the supply is 3.3V, the output is 0V, and the RESET pin voltage is 0V.
- 4) Place a jumper across pins 1-2 on the EN header. Use the DMM to verify that the voltage at the output is 5.0V and the RESET pin is 3.3V.
- 5) Connect the load (either resistive or electronic) to OUT and GND.
- 6) Use the DMM to verify output voltage is still 5.0V.

Ordering Information appears at end of data sheet.

<!-- image -->

## Detailed Description of Hardware

The MAX20472 EV kit comes fully assembled and tested. The  IC  populated  on  the  EV  kit  determines  the  package  and  the  output  current  limit.  Any  of  the  ICs  in  the MAX2047x series of high-efficiency, low-voltage  DC-DC converters  can  be  tested  on  this  EV  kit.  Changing  the IC  may  also  require  changing  the  external  components on  the  EV  kit.  Refer  to  the  MAX20471/MAX20472/ MAX20472B IC data sheet for guidance on selecting the proper components.

## EV Kit Interface

The VSUP and GND PCB pads provide power to the EV kit. Input capacitance is included to reduce peak currents drawn from the power source and reduces noise and voltage ripple on the input caused by the circuit's switching. The regulator provides output power at the OUT and GND pins.  Output  capacitance  is  selected  to  ensure  proper stability.

The  enable  control  input  (EN)  activates  the  IC  channel from  its  low-power  shutdown  state.  EN  has  an  input threshold  of  1.0V  (typ),  with  hysteresis  of  80mV  (typ). When an enable input goes high, the associated output voltage  ramps  up  with  the  programmed  soft-start  time. The IC can be enabled either by installing a shunt/jumper across pins 1-2 on the EN header, or by applying a logichigh signal to the EN PCB pad. To disable the IC, remove the shunt on pins 1-2 and install a shunt across pins 2-3 on the EN header, or apply a logic-low signal to the EN PCB pad.

## Synchronization and Switching

The IC has an on-chip oscillator that provides a 2.2MHz or  2.0MHz  (typ)  switching  frequency.  Depending  on  the condition of SYNC, two operation modes exist. If SYNC is  unconnected  or  at  GND,  the  IC  operates  in  a  highly efficient pulse-skipping mode if the load current is below the  skip-mode current threshold. If  the  current  is  above the  threshold,  the  IC  automatically  changes  to  FPWM mode. If SYNC is at VSUP or has a frequency applied to it, the IC always operates in FPWM mode. The IC can be switched during operation between FPWM and skip mode by switching SYNC. SYNC can be connected to VSUP by installing a shunt across pins 1-2 on the SYNC header, or connected to GND by installing a shunt across pins 2-3 on  the  SYNC  header. An  external  square  wave  can  be applied to the SYNC test point to cause the converter to switch at the applied frequency (refer to the MAX20471/ MAX20472/MAX20472B IC data sheet for limits).

## Spread Spectrum (SSEN)

The IC has the option to enable spread-spectrum switching to reduce EMI. Spread spectrum can be enabled by install -ing a jumper between pins 1-2 on the SSEN header, or dis -abled by installing a jumper between pins 2-3. With spread spectrum enabled, the internal oscillator varies the internal operating frequency by ±3% relative to the internally gen -erated 2.2MHz or 2.0MHz (typ) operating frequency. This function does not apply to an externally applied oscillation frequency.  The  spread-spectrum  frequency  generated  is pseudorandom,  with  a  repeat  rate  well  below  the  audio band.

## Fault Flag Signal ( RESET )

The  IC  features  an  open-drain  reset  output  for  each output  that  asserts  low  when  the  corresponding  output voltage is outside the undervoltage/overvoltage window. RESET remains asserted for a fixed timeout period after the output rises to its regulated voltage. The fixed timeout period is 0.5ms by default, but can also be factory-set to 3.7ms, 7.4ms, or 14.8ms. To obtain a logic signal, place a pullup resistor between the RESET pin and VSUP.

## PCB Layout Guidelines

Proper PCB layout of the system is crucial to good perfor -mance. The loop area created by the DC-DC components must be minimized as much as possible. Place the input capacitor, power inductor, and output capacitor as close as possible to the IC package. The output capacitor experiences  the  greatest  amount  of  ripple  current,  so  should be placed closest to the IC. Increasing the loop area will increase  EMI  and  switching  jitter,  but  may  also  degrade regulation and transient response. Optimal positioning and routing has been implemented on this EV kit.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX20472EVKIT# | EV Kit |

# Denotes RoHS compliance.

## MAX20472 EV Kit Bill of Materials

| REF DESIGNATOR             |   QTY | DESCRIPTION                                                                | MFG PART #                |
|----------------------------|-------|----------------------------------------------------------------------------|---------------------------|
| C1                         |     1 | 4.7 µF ceramic cap, 0805 size, 10V, X7R                                    | TDK CGA4J3X7R1A475K125AB  |
| C2                         |     1 | 22µF ceramic cap, 1210 size, 10V, X7R                                      | Murata GRM32ER71A476ME15L |
| C3                         |     1 | 1µF ceramic cap, 0402 size, 10V, X7S                                       | Murata GCM155C71A105KE38D |
| C4                         |     1 | 220µF electrolytic capacitor, 6.3mm dia, 6.3V                              | Panasonic EEE-FP0J221AP   |
| C5, C6                     |     2 | 0.1µF ceramic cap, 0402 size, 16V, X7R                                     | TDK CGA2B1X7R1C104K050BC  |
| L1                         |     1 | 1.0µH inductor TDK TFM-series                                              | TDK TFM252012ALMA1R0      |
| R1                         |     1 | 47kohm, 5%, 0603 size                                                      | Any                       |
| R2, R3, R4                 |     3 | 10kohm, 5%, 0603 size                                                      | Any                       |
| R5                         |     1 | 10ohm, 1%, 0201 size                                                       | Panasonic ERJ-1GEF10R0C   |
| EN, INJ, OUT, , SSEN, SYNC |     6 | Test point, 0.63"                                                          |                           |
| GND (x4), OUT, VSUP        |     6 | Test loop, wire, 18AWG solid                                               |                           |
| EN, SSEN, SYNC             |     3 | Pin header, 3 position, 0.100" pitch (comes in 40- pin strips, cut to fit) |                           |
| EN, SSEN, SYNC             |     3 | Shunt, 2-position, 0.100" pitch                                            |                           |
| U1                         |     1 | MAX20472                                                                   | Maxim MAX20472ATCA/V+     |
| -                          |     1 | PCB: MAX20471/MAX20472/MAX20472B EV Kit                                    | Maxim MAX20472EVKIT#      |

│

## MAX20472 EV Kit Schematic

<!-- image -->

│

## MAX20472 EV Kit PCB Layout Diagrams

MAX20472 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

MAX20472 EV Kit Component Placement Guide-Top Assembly

<!-- image -->

MAX20472 EV Kit PCB Layout-Bottom

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                            | PAGES CHANGED   |
|-------------------|-----------------|------------------------------------------------------------------------|-----------------|
|                 0 | 4/18            | Initial release                                                        | -               |
|                 1 | 11/20           | Added MAX20472B, 2.0MHz operating frequency; updated schematic and BOM | 1-4             |
|                 2 | 12/20           | Added MAX20472B to Evaluates header                                    | All             |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html .

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX20472/MAX20472B