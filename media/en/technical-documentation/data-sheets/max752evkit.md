<!-- lastmod 2022-08-02 -->
## EVALUATION KIT

## General Description

TheMAX732/733/752evaluationkit(EVkit)facilitates easy assembly and evaluation of Maxim's high-efficiency +12V, +15V, and adjustable step-up current-mode DCDC converters.

TheEVkit includes allneeded components(unassembled)andaprintedcircuitboard.Whencompleted, theEVkit is aworkingDC-DCstep-upconverterwith adjustableoutputvoltageupto200mA.

TheMAX732/733/752usecurrent-modepulse-width modulation(PwM)controllerstoprovidepreciseoutput regulation and low subharmonic noise.Typical no-load supply current is2mA.

These devices feature cycle-by-cycle current limiting, overcurrentlimiting,externalshutdown,andprogrammablesoft-startprotection.

TheEVkitcomponentsaresuitableforthrough-hole mounting to make construction and evaluation easy.

## Features

- Load CurrentsGuaranteed to200mAwith NoExternalMOSFET
- Step Up from a 2V Input
- 170kHzHigh-FrequencyCurrent-ModePWM
- 82%to95%Typical EfficienciesatFullLoad
- Overcurrentand Soft-StartProtection
- ShutdownCapability

## EVKit

<!-- image -->

## M/IXYM

<!-- image -->

## Ordering Information

| PART            | TEMP.RANGE   | BOARDTYPE               |
|-----------------|--------------|-------------------------|
| MAX752EVKIT-DIP | 0°C to +70°℃ | PlasticDIP- ThroughHole |

TheMAx752EVkitcanalsobeusedtoevaluatethe MAX732/MAX733,which are +12V and +15V step-up current-mode PwMregulators,respectively.Order a freesampleoftheMAx732/MAx733bycallingMaxim tollfree(1-800-998-8800),byfaxingarequest (408)737-7194,orbyreturning a sample card that is insideeveryPower-SupplyDesignGuideand1992New ReleasesDataBook.

## Terminal Descriptions

| TERMINAL NAME   | FUNCTION                                                                                                      |
|-----------------|---------------------------------------------------------------------------------------------------------------|
| VIN             | PositiveInput.Connect topositiveterminalof inputvoltagepowersupply.                                           |
| SHDN            | SHUTDOWN-activelow.Groundtopower down,tiestoVInfornormaloperationOut- putpowerFETisheldoffwhenSHDNislow.      |
| GND             | CircuitGround.Connecttonegativeterminal of inputvoltagesupply.Thisisalso the out- putvoltagenegativeterminal. |
| VOUT            | PositiveOutput.Connect toload.                                                                                |

## Operating Principle

These high-efficiency switch-moderegulatorsusea current-modepulse-widthmodulation(PwM) controller as a (MAX752) or 4V (MAX732/731) DCvoltage to ahigher output.The current-modePWMarchitectureprovides cycle-by-cyclecurrentlimitingandexcellentload-transientresponse.For detailed description,see the MAX732/MAX733andMAX731/MAX752datasheets.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX752 Evaluation Kit

## Component List

| DESIGNA- TION   |   QTY | DESCRIPTION                              | SOURCE                                                |
|-----------------|-------|------------------------------------------|-------------------------------------------------------|
| IC1             |     1 | MAX752CPA                                | Maxim                                                 |
| None            |     1 | Printedcircuitboard                      | Maxim                                                 |
| C1, C4, C7      |     2 | 0.1μFceramic capacitors                  |                                                       |
| C2, C8, C9      |     3 | 150uF,25Velectrolytic capacitors,MAxC001 | Maxim                                                 |
| C3              |     1 | 0.01uFceramiccapacitor                   |                                                       |
| C6              |     1 | 0.15uFceramiccapacitor                   |                                                       |
| D1              |     1 | Shottkydiode1N5817                       | Motorola                                              |
| R1              |     1 | 1/4W,5%10kQresistor                      |                                                       |
| C5              |     1 | 2200pfceramiccapacitor                   |                                                       |
| J1              |     1 | Jumper, solid                            |                                                       |
| L1              |     1 | 47uH inductor                            | Sumida RCH-110-470k PCH-27-473 Coilcraft Wilco ITS470 |
| R2*             |     1 | 1/4W,1%, 7.50kQresistor                  |                                                       |
| R3*             |     1 | 1/4W,1%， 47.5kQresistor                  |                                                       |

| *Note:To evaluateMAX732/MAX733,omit R2 and R3.   | *Note:To evaluateMAX732/MAX733,omit R2 and R3.   | *Note:To evaluateMAX732/MAX733,omit R2 and R3.   |
|--------------------------------------------------|--------------------------------------------------|--------------------------------------------------|
| SumidaUSA                                        | (708) 956-0666 FAX(708) 956-0702                 |                                                  |
| SumidaJapan                                      | 03-3607-5111FAX03-3607-5428                      |                                                  |
| CoilcraftUSA                                     | (708)639-6400FAX(708)639-1469                    |                                                  |
|                                                  | CoilcraftTaiwan8862-268-2146FAX8862-268-2092     |                                                  |
| Wilco                                            | (317) 293-9300 FAX(317) 293-9462                 |                                                  |

## Assembly Instructions

## CAUTioN:Observethefollowingsafetymeasures.

- 1.Do not applypower until all components are installed.
- 2.Donotsolderorworkoncircuitwhilepowerisapplied.
- 3.Never apply more than the maximum supply voltage to VIN.

TheEVkitisshippedunassembled.Youwillneedthe following toolsfor assembly:

1. Long-nose pliers
2. 2.Wire cutters
3. 3.3owsolderingironandrosin-coresolder
4. 4.Hook-upwire(#18-22AWG)fortheinputandoutput connections

CAUTioN:Using ahigh-wattage soldering ironoracidcore solder may damage theboard and components.

InstallthecomponentsasshowninFigure1andsolder theminplace.Observepolarityonthecapacitors,diode， and IC.Keep all leads short.Inspect the completed boardforcleanliness,shorts,andsoldersplashes.

A socket maybe addedfor IC1,but it may degrade performance with high load currents. In general, sockets arenotrecommended.

Theprintedcircuitboardaccommodatesavarietyof inductors.Wheninstallingtheinductor,makesureone endisconnectedonthetraceleadingtoViN.Connect theotherinductorterminaltothesametrace asdiodeD1.

Only oneof the jumpers must be installed;install J1for theMAX732/733/752.

Whenusing thekitwith theMAX732orMAX733,omitR2 and R3.

Examinetheboardforpartsinsertedincorrectlybefore applyingpower.Verify that theelectrolyticcapacitors' positive terminal alignswith theplus(+) sign on the printed circuit board.ThecathodebandonD1 must be asindicatedontheboardlegend.

## Testing

Whentesting,useanadjustablebenchpowersupplyas a source(Vin).Start with no load, then add a resistive loadbeforeconnecting tothe actual circuit.Thisprocedureminimizesthechancesofdamagingthedeviceand ensuresthataccuratedataiscollectedinanorderly manner.

Thebenchpowersupplyshouldhave3Ato6Acapability， anditscurrentlimitingshouldbesettopreventinteraction withtheEVkit'speakcurrents.

The7.5kΩand47.5kQvaluesofR2andR3settheoutput voltage to9.0v.The inputvoltagerange is2V toVoUT (4.5V to9.0Vwith these resistors).The maximum output currentis200mA.

## Shutdown

The DC-DC converters operate only if SHDN is connected to VIN.Even withSHDN grounded,however, thereisaDCpathfromVINtoVouT,andVouTwillbe onediode droplower thanViN.This isdue to thebasic topographyofstep-upconverters,andwouldbethecase evenwithIC1removedfromthecircuit.Somecurrent (VIN/10k) also flows from VIN to SHDN, due to R1.

## Internal Reference

The+1.23Vbandgapreferencesuppliesupto100uA at VREF.A 0.01uFbypass capacitorfromVREFtoGND is recommendedfortheMAX732/MAX733.

<!-- image -->

## V+ Bypass

BypassV+withcapacitorC1closetotheIC'sV+and GNDpins.Thisisespeciallyimportantwhengenerating high voltages (&gt;13V) and high currents (&gt;100mA) becauselargeload-currenttransientsproducelargevoltages (L di ).Tosnubthesevoltages,placebypass dt capacitors close to the device pins.

<!-- image -->

Figure1a.EVKitSchematic

<!-- image -->

Figure1b.DIPPCLayout,Through-HolePlacement(1XScale)

<!-- image -->

## MAX752 Evaluation Kit

## MAX752 Output Adjustment

TheMAx752EVkitoutputvoltageissetbytworesistors, R2andR3(Figures1and2),whichformavoltagedivider betweentheoutputand theerror-amplifierinput(CC)pin. ThevoltageatthejunctionofR2andR3isthe1.23V bandgapreferencevoltage.Sincetheerror-amplifier inputisCMOS,itshighinputimpedancewillnotloadthe voltagedivider.KeepR2around7.5kQ.Significantly differentvalues(&gt;50%)mightrequirealteringcompensationcapacitancevalues.R3isgivenbytheformula:

<!-- formula-not-decoded -->

CapacitorsC5 andC6furnish loopcompensation.

Figure1c.DIPPCLayout,ComponentSide(1XScale)

<!-- image -->

Figure1d.DIPPCLayout,SolderSide(1XScale)

<!-- image -->

## MAx752EvaluationKit

MaximcannotassumeresponsibilityforuseofanycircuitryotherthancircuitryentirelyembodiedinaMaximproduct.Nocircuitpatentlicensesareimplied. Maximreservestherighttochangethecircuitryandspecificationswithoutnoticeatanytime.

4

<!-- image -->