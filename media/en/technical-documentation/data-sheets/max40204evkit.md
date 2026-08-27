<!-- lastmod 2022-08-03 -->
## MAX40204 Evaluation Kit

## General Description

The  MAX40204  evaluation  kit  (EV  kit)  is  designed  to evaluate  the  MAX40204ANA+,  a  precision  bidirectional current-sense  amplifier  with  wide  common-mode  input in  an  8-bump  WLP  package.  The  EV  kit  provides  bidirectional  and  unidirectional  current-sensing  options,  a jumper  (J1)  to  switch  between  two  gain  options  (10V/V and 100V/V), and another jumper (J2) to place the board in low power mode.

The  EV  kit  features  Kelvin  connections  for  force  and sense at the amplifier inputs and a very precise currentsense  resistor  with  a  ±0.5%  tolerance  for  accurate measurement. Various test points are included for additional  evaluation.  The  EV  kit  PCB  is  available  with  the MAX40204ANA+ installed.

## Features

- Wide -0.1V to 36V Input Range Common Mode Range
- Operates Off a Single 5V Supply
- Unidirectional/Bidirectional Operation
- On-the-Fly Gain Input Jumper
- Shutdown Mode Jumper
- -40°C to +125°C Temperature Range
- Lead(Pb)-Free and RoHS Compliant
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX40204

## Quick Start

## Required Equipment

- MAX40204 EV kit
- +5V, 10mA DC power supply
- 2.5V, 10mA DC power supply
- +12V, 1A DC power supply
- Electronic load or equivalent resistor load
- Two digital voltmeters (DVM1, DVM2)

## Procedure

The MAX40204 EV kit is fully assembled and tested. Use the following steps to verify operation. Caution: Do not turn on the power supplies until all connections are completed .

- 1) Verify that the jumpers are in their default position, as shown in Table 1.
- 2) Connect the positive terminal of the +5V supply to VCC and the negative terminal to GND.
- 3) Connect the positive terminal of the +12V supply to VBATT and the negative terminal to TP1.
- 4) Connect the positive terminal of the 2.5V supply to REF, and the negative terminal to ground connection, TP3.
- 5) Connect the positive terminal of the electronic load to LOAD and the negative terminal of the electronic load to ground connection, TP2.
- 6) Connect the positive terminal of DVM1 to OUT and the negative terminal to ground connection TP3.
- 7) Connect the positive terminal of DVM2 to RS+ and the negative terminal to RS-.
- 8) Turn on the +5V supply first and then the +12V supply.
- 9) Set the electronic load to 250mA and turn the electronic load on. Observe DVM1 reading. It reads 125mV, approximately 10 times the voltage read on DVM2 above VREF voltage.
- 10) Set the gain for 100V/V and observe DVM1. It reads 1.25V.
- 11) Repeat the measurement for load currents of 500mA.

<!-- image -->

## MAX40204 Evaluation Kit

## Detailed Description

The MAX40204 EV kit provides a proven layout to dem -onstrate the true capability of the MAX40204, a 2µV (typ.) input offset high-side current-sense amplifier with 0.05% (typ.)  gain  error. The  EV  kit  features  various  test  points and  jumpers  to  facilitate  testing  and  evaluation  of  the current sense amplifier. In addition, optional input/output filtering component placeholder pads are provided to help evaluate the device's noise performance.

## Measuring the Load Current

The  MAX40204  EV  kit  comes  with  a  50mΩ  (±0.5%) sense resistor (R SENSE ) connected to the RS+ and RSinputs of the MAX40204 through Kelvin connections. The MAX40204 amplifies the voltage drop across the sense resistor and provides a voltage at it output, OUT. The output voltage depends on the sense current, current-sense resistor, and the gain configuration.

## Unidirectional Current Sensing/Bidirectional Current Sensing

To  configure  the  MAX40204  for  unidirectional  current sensing,  connect  REF  to  ground.  In  unidirectional  configuration,  the  output  voltage  at  OUT  is  referenced  to ground.  Use  equation  1  below  to  determine  the  output voltage.

## Equation 1 :

<!-- formula-not-decoded -->

where I LOAD is the load current, R SENSE  is sense resistor, and GAIN is gain of the current-sense amplifier set by jumper J1.

## Bidirectional Current Sensing

For  bidirectional  configuration,  connect  REF  to  a  voltage  supply  midlevel  between  VDD  and  ground.  In  this configuration, the output voltage at OUT is referenced the

## Component Suppliers

| SUPPLIER               | PHONE        | WEBSITE               |
|------------------------|--------------|-----------------------|
| Wurth Electronics Inc. | 248 756-5355 | www.we-online.com     |
| Murata                 | 770-436-1300 | www.murata.com        |
| TDK                    | 847-803-6100 | www.component.tdk.com |

Note:

Indicate that you are using the MAX40204 when contacting these component suppliers.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX40204EVKIT# | EV Kit |

#Denotes RoHS compliance.

## Evaluates: MAX40204

voltage at REF. Measured output voltage above the VREF indicates current flowing to the load, and measured output voltage  below  the  VREF  indicates  current  flowing  from load  to  the  source.  Use  equation  2  below  to  determine the output voltage.

## Equation 2 :

<!-- formula-not-decoded -->

where I LOAD is the load current, R SENSE  is sense resistor,  GAIN  is  gain  of  the  current-sense  amplifier  set  by jumper J1, and VDD/2 is the voltage connected to REF to set the output voltage reference level.

## Gain Selection Jumper (J1)

Jumper J1 allows the MAX40204 EV kit to set the gain of the MAX40204 to either 10V/V or 100V/V. The default gain of the EV kit is 10V/V. See the Table 1 for more detail.

## Shutdown Input (SHDN)

Use J2 jumper on the MAX40204 EV kit enable/disable the MAX40204 operation. See the Table 1 for more detail.

## Table 1. Jumper Table (J1, J2)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                             |
|----------|------------------|-----------------------------------------|
| J1       | 1-2              | Connects GAIN to VCC (Gain = 100V/V)    |
| J1       | 2-3*             | Connects GAIN to GND (Gain = 10V/V)     |
| J2       | 1-2*             | Connects SHDN to VCC (normal operation) |
| J2       | 2-3              | Connects SHDN to GND (shutdown)         |

*Default position.

## MAX40204 Evaluation Kit

## MAX40204 EV Kit Bill of Materials

| PART          |   QTY | DESCRIPTION                                                                                                                     |
|---------------|-------|---------------------------------------------------------------------------------------------------------------------------------|
| C4            |     1 | 4.7µF ±10%, 16V X7R ceramic capacitor (0603) Murata: GRM188Z71C475KE21                                                          |
| C5, C6        |     2 | 0.1µF ±15%, 25V ceramic capacitors (0603) Murata: GRM18871E104KA01, Wurth Electronics Inc.885012206071, TDK:CGJ3E2XR1E104K080AA |
| C9            |     1 | 1µF ±10%, 100V ceramic capacitor (0805), Murat: GRJ21BC72A105KE11 TDK: C2012X7S2A105K125AB                                      |
| C1-C3, C7, C8 |     5 | Not installed, ceramic capacitors (0805)                                                                                        |
|               |     4 | Test Points, Keystone 5011                                                                                                      |
|               |     2 | 3-pin header                                                                                                                    |
|               |     7 | Test Points, Keystone 5012                                                                                                      |
|               |     1 | 0.05Ω ± 0.5% resistor (1206)                                                                                                    |
|               |     3 | Not installed, resistors (0805)                                                                                                 |
|               |     1 | MAX40204ANA+                                                                                                                    |
|               |     1 | Test Points, Keystone 5023                                                                                                      |
|               |     1 | PCB, MAX40204 Evaluation kit                                                                                                    |

Evaluates: MAX40204

## MAX40204 EV Kit Schematic

<!-- image -->

## MAX40204 EV Kit PCB Layouts

MAX40204 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

MAX40204 EV Kit PCB Layout-Top

<!-- image -->

MAX40204 EV Kit PCB Layout-Bottom

<!-- image -->

MAX40204 EV Kit Component Placement Guide-Bottom Silkscreen

<!-- image -->

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 10/20           | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https:/w.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX40204